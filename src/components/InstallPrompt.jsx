import { useEffect, useState } from 'react'

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault()
      console.log('beforeinstallprompt event fired')
      setDeferredPrompt(event)

      // نمایش درخواست نصب کمی بعد از ورود کاربر
      setTimeout(() => {
        setShowPrompt(true)
      }, 2000)
    }

    console.log('Registering beforeinstallprompt listener')
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      console.log('PWA install accepted')
    } else {
      console.log('PWA install dismissed')
    }

    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  const handleClose = () => {
    setShowPrompt(false)
  }

  if (!showPrompt) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderRadius: '0.75rem',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        zIndex: 1000,
        maxWidth: '90%',
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>
          نصب اپلیکیشن Movie
        </div>
        <div style={{ fontSize: '0.8rem', color: '#cbd5f5', marginTop: '4px' }}>
          برای دسترسی سریع‌تر روی موبایل و دسکتاپ، اپلیکیشن را نصب کنید.
        </div>
      </div>
      <button
        onClick={handleInstallClick}
        style={{
          background: 'linear-gradient(to left, #f97316, #ea580c)',
          border: 'none',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '999px',
          fontSize: '0.8rem',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        نصب
      </button>
      <button
        onClick={handleClose}
        style={{
          background: 'transparent',
          border: 'none',
          color: '#9ca3af',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
        aria-label="بستن"
      >
        ×
      </button>
    </div>
  )
}

export default InstallPrompt


