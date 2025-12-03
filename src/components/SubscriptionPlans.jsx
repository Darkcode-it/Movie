import React, { useState } from 'react';
import { FaCheck, FaCrown, FaRocket, FaStar, FaTimes, FaSparkles } from 'react-icons/fa';

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 'basic',
      name: 'پایه',
      icon: <FaStar className="text-2xl" />,
      price: { monthly: 99000, annual: 990000 },
      description: 'مناسب برای تماشای شخصی',
      features: [
        'تماشای بدون تبلیغ',
        'کیفیت HD',
        'دسترسی به تمام فیلم‌ها',
        'پخش روی 1 دستگاه',
        'دانلود برای تماشای آفلاین',
      ],
      popular: false,
      color: 'slate',
    },
    {
      id: 'standard',
      name: 'استاندارد',
      icon: <FaRocket className="text-2xl" />,
      price: { monthly: 149000, annual: 1490000 },
      description: 'بهترین انتخاب برای خانواده',
      features: [
        'تماشای بدون تبلیغ',
        'کیفیت Full HD',
        'دسترسی به تمام فیلم‌ها',
        'پخش روی 2 دستگاه همزمان',
        'دانلود برای تماشای آفلاین',
        'دسترسی اولویت‌دار به محتوای جدید',
      ],
      popular: true,
      color: 'rose',
    },
    {
      id: 'premium',
      name: 'پریمیوم',
      icon: <FaCrown className="text-2xl" />,
      price: { monthly: 199000, annual: 1990000 },
      description: 'تجربه کامل و بی‌نظیر',
      features: [
        'تماشای بدون تبلیغ',
        'کیفیت 4K Ultra HD',
        'دسترسی به تمام فیلم‌ها',
        'پخش روی 4 دستگاه همزمان',
        'دانلود برای تماشای آفلاین',
        'دسترسی اولویت‌دار به محتوای جدید',
        'پشتیبانی 24/7',
        'دسترسی به محتوای انحصاری',
      ],
      popular: false,
      color: 'amber',
    },
  ];

  const handlePurchase = (planId) => {
    setSelectedPlan(planId);
    // در اینجا می‌توانید به صفحه پرداخت هدایت کنید
    console.log(`خرید پلن ${planId} با پرداخت ${isAnnual ? 'سالانه' : 'ماهانه'}`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const PlanCard = ({ plan }) => {
    const isSelected = selectedPlan === plan.id;
    const currentPrice = isAnnual ? plan.price.annual : plan.price.monthly;
    const monthlyEquivalent = isAnnual ? Math.round(plan.price.annual / 12) : plan.price.monthly;
    const discount = isAnnual ? Math.round(((plan.price.monthly * 12 - plan.price.annual) / (plan.price.monthly * 12)) * 100) : 0;

    return (
      <div
        className={`relative flex flex-col bg-slate-800 rounded-2xl p-8 transition-all duration-300 
          border-2 ${
            plan.popular
              ? 'border-rose-500 shadow-2xl shadow-rose-500/20 scale-105'
              : 'border-slate-700 hover:border-slate-600'
          } ${isSelected ? 'ring-4 ring-rose-500 ring-opacity-50' : ''}`}
      >
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
              <FaStar className="text-xs" />
              محبوب‌ترین
            </span>
          </div>
        )}

        <div className={`flex justify-center mb-6 ${
          plan.color === 'slate' ? 'text-slate-500' :
          plan.color === 'rose' ? 'text-rose-500' :
          'text-amber-500'
        }`}>
          {plan.icon}
        </div>

        <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
        <p className="text-gray-400 text-center mb-6 text-sm">{plan.description}</p>

        <div className="mb-6">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-bold text-white">{formatPrice(currentPrice)}</span>
            <span className="text-gray-400">تومان</span>
          </div>
          {isAnnual && (
            <div className="text-center mt-2">
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(plan.price.monthly)} تومان
              </span>
              <span className="text-sm text-green-400 mr-2">
                {discount}% تخفیف
              </span>
              <div className="text-xs text-gray-500 mt-1">
                معادل ماهانه {formatPrice(monthlyEquivalent)} تومان
              </div>
            </div>
          )}
          {!isAnnual && (
            <div className="text-center text-xs text-gray-500 mt-2">ماهانه</div>
          )}
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheck className={`${
                plan.color === 'slate' ? 'text-slate-500' :
                plan.color === 'rose' ? 'text-rose-500' :
                'text-amber-500'
              } mt-1 flex-shrink-0`} />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handlePurchase(plan.id)}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
            plan.popular
              ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg shadow-rose-500/50'
              : plan.color === 'slate'
              ? 'bg-slate-600 hover:bg-slate-700 text-white'
              : plan.color === 'rose'
              ? 'bg-rose-600 hover:bg-rose-700 text-white'
              : 'bg-amber-600 hover:bg-amber-700 text-white'
          }`}
        >
          {isSelected ? 'در حال پردازش...' : 'انتخاب پلن'}
        </button>
      </div>
    );
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
              اشتراک ویژه
            </span>
            <br />
            بهترین تجربه تماشا
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            با انتخاب یکی از پلن‌های زیر، دسترسی نامحدود به هزاران فیلم و سریال با بهترین کیفیت داشته باشید
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 rounded-xl p-1 inline-flex gap-2">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                !isAnnual
                  ? 'bg-rose-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              پرداخت ماهانه
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative ${
                isAnnual
                  ? 'bg-rose-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              پرداخت سالانه
              {isAnnual && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  صرفه‌جویی
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            تمام پلن‌ها شامل 7 روز تست رایگان هستند
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              امکان لغو در هر زمان
            </span>
            <span className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              پرداخت امن
            </span>
            <span className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              پشتیبانی 24/7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;

