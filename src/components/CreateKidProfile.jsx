import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChild, FaBirthdayCake, FaUser, FaCamera, FaCheck, FaTimes, FaSpinner } from 'react-icons/fa';

const CreateKidProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    avatar: '',
    gender: '',
    interests: []
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const ageGroups = [
    { value: '3-5', label: '3 تا 5 سال', icon: '🎈' },
    { value: '6-8', label: '6 تا 8 سال', icon: '🚀' },
    { value: '9-12', label: '9 تا 12 سال', icon: '⭐' },
  ];

  const interests = [
    { id: 'cartoon', label: 'کارتون', icon: '🎬' },
    { id: 'adventure', label: 'ماجراجویی', icon: '🗺️' },
    { id: 'comedy', label: 'کمدی', icon: '😂' },
    { id: 'educational', label: 'آموزشی', icon: '📚' },
    { id: 'fantasy', label: 'فانتزی', icon: '✨' },
    { id: 'animals', label: 'حیوانات', icon: '🦁' },
  ];

  const avatars = [
    '👶', '👦', '👧', '🧒', '👨‍🦱', '👩', '🧑', '👱‍♀️'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // حذف خطا برای این فیلد
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleInterestToggle = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'نام را وارد کنید';
    }
    if (!formData.age) {
      newErrors.age = 'گروه سنی را انتخاب کنید';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.gender) {
      newErrors.gender = 'جنسیت را انتخاب کنید';
    }
    if (!formData.avatar) {
      newErrors.avatar = 'یک آواتار انتخاب کنید';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  // پشتیبانی از کلید Enter برای رفتن به مرحله بعد
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && step < 3) {
      e.preventDefault();
      handleNext();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // ایجاد شناسه یکتا برای پروفایل
      const profileId = Date.now().toString();
      const profileData = {
        id: profileId,
        ...formData,
        createdAt: new Date().toISOString()
      };

      // دریافت پروفایل‌های موجود از localStorage
      const existingProfiles = JSON.parse(localStorage.getItem('kidProfiles') || '[]');
      
      // افزودن پروفایل جدید
      const updatedProfiles = [...existingProfiles, profileData];
      localStorage.setItem('kidProfiles', JSON.stringify(updatedProfiles));
      localStorage.setItem('activeKidProfile', JSON.stringify(profileData));

      // نمایش پیام موفقیت
      setIsSuccess(true);
      
      // منتظر ماندن کوتاه برای نمایش پیام موفقیت
      setTimeout(() => {
        navigate('/Movie/kids-watch');
      }, 2000);
    } catch (error) {
      console.error('خطا در ذخیره پروفایل:', error);
      setErrors({ submit: 'خطا در ذخیره پروفایل. لطفا دوباره تلاش کنید.' });
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-12 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
              ساخت پروفایل کودک
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            محیطی امن و شخصی‌سازی شده برای فرزندتان ایجاد کنید
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step >= s
                    ? 'bg-amber-500 border-amber-500 text-white'
                    : 'border-gray-600 text-gray-400'
                }`}>
                  {step > s ? <FaCheck /> : s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step > s ? 'bg-amber-500' : 'bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>اطلاعات پایه</span>
            <span>شخصی‌سازی</span>
            <span>تایید نهایی</span>
          </div>
        </div>

        {/* Success Message */}
        {isSuccess && (
          <div className="bg-green-500/20 border-2 border-green-500 rounded-2xl p-8 text-center animate-fadeIn">
            <div className="text-6xl mb-4 animate-bounce">✅</div>
            <h3 className="text-3xl font-bold text-green-400 mb-3">
              پروفایل با موفقیت ایجاد شد!
            </h3>
            <p className="text-green-300 text-lg mb-4">
              در حال انتقال به صفحه کودکان...
            </p>
            <div className="flex justify-center">
              <FaSpinner className="animate-spin text-green-400 text-2xl" />
            </div>
          </div>
        )}

        {/* Form */}
        {!isSuccess && (
          <form onSubmit={handleSubmit} className="bg-slate-800 rounded-2xl p-8 shadow-2xl" onKeyDown={handleKeyPress}>
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <label className="block text-white text-lg font-semibold mb-3 flex items-center gap-2">
                  <FaUser />
                  نام کودک
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && step === 1) {
                      e.preventDefault();
                      handleNext();
                    }
                  }}
                  placeholder="مثلا: علی، مریم"
                  aria-label="نام کودک"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-700 text-white placeholder-gray-400 border-2 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.name ? 'border-red-500' : 'border-slate-600'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                    <FaTimes className="text-xs" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white text-lg font-semibold mb-3 flex items-center gap-2">
                  <FaBirthdayCake />
                  گروه سنی
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {ageGroups.map((age) => (
                    <button
                      key={age.value}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, age: age.value }));
                        if (errors.age) setErrors(prev => ({ ...prev, age: '' }));
                      }}
                      aria-label={`انتخاب گروه سنی ${age.label}`}
                      aria-pressed={formData.age === age.value}
                      className={`p-6 rounded-xl border-2 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        formData.age === age.value
                          ? 'bg-amber-500 border-amber-500 text-white'
                          : 'bg-slate-700 border-slate-600 text-gray-300 hover:border-amber-500'
                      }`}
                    >
                      <div className="text-4xl mb-2">{age.icon}</div>
                      <div className="font-semibold">{age.label}</div>
                    </button>
                  ))}
                </div>
                {errors.age && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                    <FaTimes className="text-xs" />
                    {errors.age}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Customization */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <label className="block text-white text-lg font-semibold mb-3 flex items-center gap-2">
                  <FaChild />
                  جنسیت
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'male', label: 'پسر', icon: '👦' },
                    { value: 'female', label: 'دختر', icon: '👧' }
                  ].map((gender) => (
                    <button
                      key={gender.value}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, gender: gender.value }));
                        if (errors.gender) setErrors(prev => ({ ...prev, gender: '' }));
                      }}
                      aria-label={`انتخاب جنسیت ${gender.label}`}
                      aria-pressed={formData.gender === gender.value}
                      className={`p-6 rounded-xl border-2 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        formData.gender === gender.value
                          ? 'bg-amber-500 border-amber-500 text-white'
                          : 'bg-slate-700 border-slate-600 text-gray-300 hover:border-amber-500'
                      }`}
                    >
                      <div className="text-4xl mb-2">{gender.icon}</div>
                      <div className="font-semibold">{gender.label}</div>
                    </button>
                  ))}
                </div>
                {errors.gender && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                    <FaTimes className="text-xs" />
                    {errors.gender}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white text-lg font-semibold mb-3 flex items-center gap-2">
                  <FaCamera />
                  انتخاب آواتار
                </label>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                  {avatars.map((avatar, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, avatar }));
                        if (errors.avatar) setErrors(prev => ({ ...prev, avatar: '' }));
                      }}
                      aria-label={`انتخاب آواتار ${avatar}`}
                      aria-pressed={formData.avatar === avatar}
                      className={`text-4xl p-4 rounded-xl border-2 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        formData.avatar === avatar
                          ? 'bg-amber-500 border-amber-500 scale-110'
                          : 'bg-slate-700 border-slate-600 hover:border-amber-500'
                      }`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
                {errors.avatar && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                    <FaTimes className="text-xs" />
                    {errors.avatar}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white text-lg font-semibold mb-3">
                  علایق و سلیقه‌ها (اختیاری)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => handleInterestToggle(interest.id)}
                      aria-label={`${formData.interests.includes(interest.id) ? 'حذف' : 'افزودن'} علاقه ${interest.label}`}
                      aria-pressed={formData.interests.includes(interest.id)}
                      className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        formData.interests.includes(interest.id)
                          ? 'bg-amber-500 border-amber-500 text-white'
                          : 'bg-slate-700 border-slate-600 text-gray-300 hover:border-amber-500'
                      }`}
                    >
                      <span className="text-2xl">{interest.icon}</span>
                      <span className="font-medium">{interest.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center">
                <div className="text-6xl mb-4">{formData.avatar}</div>
                <h3 className="text-3xl font-bold text-white mb-2">{formData.name}</h3>
                <p className="text-gray-400 text-lg">
                  {ageGroups.find(a => a.value === formData.age)?.label}
                  {' • '}
                  {formData.gender === 'male' ? 'پسر' : 'دختر'}
                </p>
              </div>

              {errors.submit && (
                <div className="bg-red-500/20 border-2 border-red-500 rounded-xl p-4">
                  <p className="text-red-400 text-sm flex items-center gap-2">
                    <FaTimes />
                    {errors.submit}
                  </p>
                </div>
              )}

              {formData.interests.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3">علایق انتخاب شده:</h4>
                  <div className="flex flex-wrap gap-2">
                    {formData.interests.map((interestId) => {
                      const interest = interests.find(i => i.id === interestId);
                      return (
                        <span
                          key={interestId}
                          className="px-4 py-2 bg-amber-500/20 border border-amber-500 rounded-full text-amber-400 flex items-center gap-2"
                        >
                          <span>{interest?.icon}</span>
                          <span>{interest?.label}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="bg-slate-700 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  با ایجاد این پروفایل، فرزندتان می‌تواند به محتوای مناسب سن خود دسترسی داشته باشد و 
                  محیطی امن و کنترل شده برای تماشای فیلم و کارتون داشته باشد.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-700">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={isLoading || isSuccess}
                aria-label="مرحله قبلی"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                قبلی
              </button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                aria-label="مرحله بعد"
                disabled={isLoading || isSuccess}
                className="px-8 py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                بعدی
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading || isSuccess}
                aria-label="ایجاد پروفایل کودک"
                className="px-8 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    در حال ذخیره...
                  </>
                ) : (
                  <>
                    <FaCheck />
                    ایجاد پروفایل
                  </>
                )}
              </button>
            )}
          </div>
        </form>
        )}
      </div>
    </section>
  );
};

export default CreateKidProfile;

