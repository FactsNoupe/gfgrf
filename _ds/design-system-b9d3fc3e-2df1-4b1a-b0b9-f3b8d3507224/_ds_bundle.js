/* @ds-bundle: {"format":3,"namespace":"DesignSystem_b9d3fc","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"AboutSection","sourcePath":"ui_kits/landing_page/AboutSection.jsx"},{"name":"DonationProcessSection","sourcePath":"ui_kits/landing_page/DonationProcessSection.jsx"},{"name":"FAQSection","sourcePath":"ui_kits/landing_page/FAQSection.jsx"},{"name":"Footer","sourcePath":"ui_kits/landing_page/Footer.jsx"},{"name":"FormatsSection","sourcePath":"ui_kits/landing_page/FormatsSection.jsx"},{"name":"HeroSection","sourcePath":"ui_kits/landing_page/HeroSection.jsx"},{"name":"RegistrationSection","sourcePath":"ui_kits/landing_page/RegistrationSection.jsx"},{"name":"StatisticsSection","sourcePath":"ui_kits/landing_page/StatisticsSection.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"364077f0804b","components/feedback/Accordion.jsx":"b786b3e095a3","components/feedback/Badge.jsx":"edd7312d9dec","components/forms/Checkbox.jsx":"06e5eae22383","components/forms/Input.jsx":"169df39c3442","components/layout/Card.jsx":"721921e13ead","components/layout/Hero.jsx":"cab8bd8ec9cf","ui_kits/landing_page/AboutSection.jsx":"2697ea452ecc","ui_kits/landing_page/DonationProcessSection.jsx":"7c0f7fa3e574","ui_kits/landing_page/FAQSection.jsx":"7dae69541f6a","ui_kits/landing_page/Footer.jsx":"40251fbbcd55","ui_kits/landing_page/FormatsSection.jsx":"a11065696c0b","ui_kits/landing_page/HeroSection.jsx":"03b73eb32484","ui_kits/landing_page/RegistrationSection.jsx":"f9a284e001ca","ui_kits/landing_page/StatisticsSection.jsx":"272f475ad9e7","ui_kits/landing_page/ds-base.js":"50fb002afe18"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_b9d3fc = window.DesignSystem_b9d3fc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button Component
 * 
 * Primary CTA button for the Доноры РЭУ design system.
 * Supports multiple variants (primary, secondary, ghost) and sizes.
 * 
 * @example
 * <Button variant="primary" size="large">Записаться на донацию</Button>
 * <Button variant="secondary" disabled>Недоступно</Button>
 */

function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles = {
    fontWeight: 600,
    fontSize: 'var(--font-size-body)',
    fontFamily: 'var(--font-sans)',
    border: 'none',
    borderRadius: 'var(--radius-standard)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: `all var(--transition-fast)`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-s)'
  };
  const sizeStyles = {
    small: {
      padding: '8px 16px',
      fontSize: 'var(--font-size-body-small)'
    },
    medium: {
      padding: 'var(--spacing-s) var(--spacing-m)',
      fontSize: 'var(--font-size-body)'
    },
    large: {
      padding: '16px 32px',
      fontSize: 'var(--font-size-body-large)'
    }
  };
  const variantStyles = {
    primary: {
      backgroundColor: disabled ? 'var(--color-bg-tertiary)' : 'var(--color-primary)',
      color: disabled ? 'var(--color-text-disabled)' : 'white'
    },
    secondary: {
      backgroundColor: disabled ? 'var(--color-bg-tertiary)' : 'var(--color-bg-tertiary)',
      color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text-primary)',
      border: disabled ? 'none' : '1px solid var(--color-border-dark)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: disabled ? 'var(--color-text-disabled)' : 'var(--color-primary)',
      border: '1px solid transparent'
    }
  };
  const hoverStyles = !disabled && variant === 'primary' ? {
    ':hover': {
      backgroundColor: 'var(--color-primary-dark)'
    }
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant]
    },
    disabled: disabled,
    onClick: onClick,
    className: className
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
/**
 * Accordion Component
 * 
 * Expandable FAQ sections for Q&A content.
 */

function Accordion({
  items = [],
  defaultOpen = []
}) {
  const [openItems, setOpenItems] = React.useState(defaultOpen);
  const toggleItem = id => {
    setOpenItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-m)'
    }
  }, items.map((item, idx) => /*#__PURE__*/React.createElement("div", {
    key: item.id || idx,
    style: {
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-standard)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => toggleItem(item.id || idx),
    style: {
      width: '100%',
      padding: 'var(--spacing-m)',
      background: 'white',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 'var(--font-size-body)',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      transition: 'background-color var(--transition-fast)'
    },
    onMouseEnter: e => e.target.style.backgroundColor = '#F1FAEE',
    onMouseLeave: e => e.target.style.backgroundColor = 'white'
  }, item.title, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: openItems.includes(item.id || idx) ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform var(--transition-fast)',
      fontSize: '20px'
    }
  }, "\u25BC")), openItems.includes(item.id || idx) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--spacing-m)',
      background: '#F1FAEE',
      borderTop: '1px solid var(--color-border)',
      color: 'var(--color-text-primary)',
      fontSize: 'var(--font-size-body)',
      lineHeight: '1.6'
    }
  }, item.content))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/**
 * Badge Component
 * 
 * Small label for categorization and status.
 */

function Badge({
  children,
  variant = 'default',
  size = 'medium'
}) {
  const variantStyles = {
    default: {
      backgroundColor: 'var(--color-primary)',
      color: 'white'
    },
    secondary: {
      backgroundColor: 'var(--color-bg-tertiary)',
      color: 'var(--color-text-primary)'
    },
    info: {
      backgroundColor: 'var(--color-info)',
      color: 'white'
    },
    warning: {
      backgroundColor: 'var(--color-warning)',
      color: 'white'
    }
  };
  const sizeStyles = {
    small: {
      fontSize: 'var(--font-size-label)',
      padding: '4px 8px'
    },
    medium: {
      fontSize: 'var(--font-size-body-small)',
      padding: '6px 12px'
    },
    large: {
      fontSize: 'var(--font-size-body)',
      padding: '8px 16px'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      borderRadius: 'var(--radius-full)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      ...variantStyles[variant],
      ...sizeStyles[size]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox Component
 */

function Checkbox({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  required = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-s)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: id,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: '20px',
      height: '20px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      accentColor: 'var(--color-primary)'
    }
  }), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 'var(--font-size-body)',
      color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "*")));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input Component
 * 
 * Text input field with support for validation states and labels.
 */

function Input({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  error = false,
  disabled = false,
  label = '',
  required = false,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-s)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'var(--font-size-body-small)',
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      padding: 'var(--spacing-m)',
      fontSize: 'var(--font-size-body)',
      fontFamily: 'var(--font-sans)',
      border: error ? '2px solid var(--color-error)' : '1px solid var(--color-border)',
      borderRadius: 'var(--radius-standard)',
      transition: `border-color var(--transition-fast)`,
      backgroundColor: disabled ? 'var(--color-bg-tertiary)' : 'white',
      color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text-primary)'
    }
  }, props)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-body-small)',
      color: 'var(--color-error)'
    }
  }, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u044D\u0442\u043E \u043F\u043E\u043B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E"));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
/**
 * Card Component
 * 
 * Content container with shadow, padding, and rounded corners.
 */

function Card({
  children,
  elevation = 'base',
  padding = true,
  onClick,
  style = {}
}) {
  const elevationStyles = {
    xs: {
      boxShadow: 'var(--shadow-xs)'
    },
    sm: {
      boxShadow: 'var(--shadow-sm)'
    },
    base: {
      boxShadow: 'var(--shadow-base)'
    },
    md: {
      boxShadow: 'var(--shadow-md)'
    },
    lg: {
      boxShadow: 'var(--shadow-lg)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      backgroundColor: 'white',
      borderRadius: 'var(--radius-standard)',
      padding: padding ? 'var(--spacing-l)' : 0,
      ...elevationStyles[elevation],
      cursor: onClick ? 'pointer' : 'default',
      transition: onClick ? `transform var(--transition-fast), box-shadow var(--transition-fast)` : 'none',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
/**
 * Hero Component
 * 
 * Large headline section with CTA button and background image.
 */

function Hero({
  title,
  subtitle,
  buttonText = 'Записаться',
  buttonOnClick,
  backgroundImage,
  backgroundOverlay = true
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '500px',
      padding: 'var(--spacing-3xl) var(--spacing-m)',
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      color: 'white'
    }
  }, backgroundOverlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(29, 53, 87, 0.4)',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '700px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--font-size-display-1)',
      fontWeight: 700,
      margin: 0,
      marginBottom: 'var(--spacing-m)',
      lineHeight: '1.2'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--font-size-body-large)',
      margin: 0,
      marginBottom: 'var(--spacing-2xl)',
      fontWeight: 400,
      opacity: 0.95
    }
  }, subtitle), buttonText && /*#__PURE__*/React.createElement("button", {
    onClick: buttonOnClick,
    style: {
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      border: 'none',
      padding: '16px 48px',
      fontSize: 'var(--font-size-body-large)',
      fontWeight: 600,
      borderRadius: 'var(--radius-standard)',
      cursor: 'pointer',
      transition: 'background-color var(--transition-fast)'
    },
    onMouseEnter: e => e.target.style.backgroundColor = 'var(--color-primary-dark)',
    onMouseLeave: e => e.target.style.backgroundColor = 'var(--color-primary)'
  }, buttonText)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing_page/AboutSection.jsx
try { (() => {
/**
 * Landing Page – About Section
 */

function AboutSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 24px',
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '36px',
      fontWeight: 700,
      color: '#2B2126',
      marginBottom: '32px',
      textAlign: 'center'
    }
  }, "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(43, 33, 38, 0.12)',
      lineHeight: '1.8'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      color: '#2B2126',
      margin: '0 0 16px 0'
    }
  }, "\u041C\u044B \u2014 \u0434\u043E\u043D\u043E\u0440\u0441\u043A\u043E\u0435 \u043A\u043E\u043C\u044C\u044E\u043D\u0438\u0442\u0438 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 (\u0420\u042D\u0423), \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 2015 \u0433\u043E\u0434\u0430. \u041D\u0430\u0448\u0430 \u043C\u0438\u0441\u0441\u0438\u044F: \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u043E\u043D\u043E\u0440\u0441\u0442\u0432\u043E \u0438 \u0441\u043F\u0430\u0441\u0430\u0442\u044C \u0436\u0438\u0437\u043D\u0438."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      color: '#6E5B61',
      margin: 0,
      fontStyle: 'italic'
    }
  }, "\xAB\u0414\u043E\u043D\u043E\u0440\u044B \u0420\u042D\u0423: \u0442\u044B \u2013 \u043D\u0435 \u043E\u0434\u0438\u043D\xBB")));
}
Object.assign(__ds_scope, { AboutSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing_page/AboutSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing_page/DonationProcessSection.jsx
try { (() => {
/**
 * Landing Page – Donation Process Section
 */

function DonationProcessSection() {
  const steps = [{
    number: '1',
    title: 'Регистрация онлайн',
    description: 'Заполните краткую форму'
  }, {
    number: '2',
    title: 'Медосмотр',
    description: 'Врач проверит ваше здоровье'
  }, {
    number: '3',
    title: 'Сдача крови',
    description: '10–15 минут'
  }, {
    number: '4',
    title: 'Отдых и угощение',
    description: 'Чай, печенье, безопасность'
  }, {
    number: '5',
    title: 'Справка и подарок',
    description: 'Память о благородном деле'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 24px',
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '36px',
      fontWeight: 700,
      color: '#2B2126',
      marginBottom: '48px',
      textAlign: 'center'
    }
  }, "\u041A\u0430\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0434\u043E\u043D\u0430\u0446\u0438\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px'
    }
  }, steps.map((step, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(43, 33, 38, 0.12)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '48px',
      height: '48px',
      backgroundColor: '#B81D38',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontWeight: 700,
      margin: '0 auto 16px'
    }
  }, step.number), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#2B2126',
      margin: '0 0 8px 0'
    }
  }, step.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      color: '#6E5B61',
      margin: 0
    }
  }, step.description)))));
}
Object.assign(__ds_scope, { DonationProcessSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing_page/DonationProcessSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing_page/FAQSection.jsx
try { (() => {
/**
 * Landing Page – FAQ Section
 */

function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState(null);
  const faqs = [{
    question: 'Можно ли сдавать кровь с тату?',
    answer: 'Да, можно. Татуировка не является противопоказанием, если она была сделана более 6 месяцев назад.'
  }, {
    question: 'Больна ли игла?',
    answer: 'Укол практически безболезненный. Используются тончайшие иглы, процедура занимает несколько секунд.'
  }, {
    question: 'Что есть перед донацией?',
    answer: 'Легкий завтрак за 2–3 часа до процедуры. Достаточно хлеба, каши или фруктов.'
  }, {
    question: 'Как часто можно сдавать?',
    answer: 'Мужчины — до 5 раз в год, женщины — до 4 раз в год. Между сдачами должно пройти минимум 2 месяца.'
  }, {
    question: 'Зачем вступать в регистр?',
    answer: 'Регистр костного мозга помогает спасать жизни людей, нуждающихся в трансплантации.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 24px',
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '36px',
      fontWeight: 700,
      color: '#2B2126',
      marginBottom: '48px',
      textAlign: 'center'
    }
  }, "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, faqs.map((faq, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      border: '1px solid #C9B7BC',
      borderRadius: '8px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpenIndex(openIndex === idx ? null : idx),
    style: {
      width: '100%',
      padding: '20px',
      background: 'white',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '16px',
      fontWeight: 600,
      color: '#2B2126',
      transition: 'background-color 200ms'
    },
    onMouseEnter: e => e.target.style.backgroundColor = '#FBF6F4',
    onMouseLeave: e => e.target.style.backgroundColor = 'white'
  }, faq.question, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 200ms',
      fontSize: '20px'
    }
  }, "\u25BC")), openIndex === idx && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      background: '#FBF6F4',
      borderTop: '1px solid #C9B7BC',
      color: '#2B2126',
      fontSize: '16px',
      lineHeight: '1.6'
    }
  }, faq.answer)))));
}
Object.assign(__ds_scope, { FAQSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing_page/FAQSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing_page/Footer.jsx
try { (() => {
/**
 * Landing Page – Footer
 */

function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      backgroundColor: '#2B2126',
      color: 'white',
      padding: '48px 24px',
      marginTop: '64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px',
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '16px',
      fontWeight: 600,
      marginBottom: '16px',
      margin: 0
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: '1.6',
      margin: '0 0 8px 0'
    }
  }, "Email: donors@reu.ru"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: '1.6',
      margin: 0
    }
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: +7 (495) 123-45-67")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '16px',
      fontWeight: 600,
      marginBottom: '16px',
      margin: 0
    }
  }, "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#E5707E',
      textDecoration: 'none'
    }
  }, "VK (1,951 \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432)")), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#E5707E',
      textDecoration: 'none'
    }
  }, "Telegram")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '16px',
      fontWeight: 600,
      marginBottom: '16px',
      margin: 0
    }
  }, "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#E5707E',
      textDecoration: 'none'
    }
  }, "NFRZ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#E5707E',
      textDecoration: 'none'
    }
  }, "FMBA"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(247, 127, 136, 0.2)',
      paddingTop: '24px',
      textAlign: 'center',
      fontSize: '12px',
      color: '#C9B7BC'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\xA9 2015\u20132027 \u0414\u043E\u043D\u043E\u0440\u044B \u0420\u042D\u0423. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B. \u0421\u043F\u0430\u0441\u0430\u0439\u0442\u0435 \u0436\u0438\u0437\u043D\u0438 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043D\u0430\u043C\u0438."))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing_page/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing_page/FormatsSection.jsx
try { (() => {
/**
 * Landing Page – Participation Formats Section
 */

function FormatsSection() {
  const formats = [{
    title: 'Сдать кровь',
    description: 'Основной способ помощи'
  }, {
    title: 'Регистр костного мозга',
    description: 'Спасай жизни на расстояние'
  }, {
    title: 'Стать организатором',
    description: 'Помогай собирать доноров'
  }, {
    title: 'Донорский комитет',
    description: 'Участвуй в развитии проекта'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 24px',
      backgroundColor: '#FBF6F4'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '36px',
      fontWeight: 700,
      color: '#2B2126',
      marginBottom: '48px',
      textAlign: 'center',
      margin: 0
    }
  }, "\u0424\u043E\u0440\u043C\u0430\u0442\u044B \u0443\u0447\u0430\u0441\u0442\u0438\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px'
    }
  }, formats.map((format, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      backgroundColor: 'white',
      padding: '28px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(43, 33, 38, 0.12)',
      borderLeft: '4px solid #B81D38'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#2B2126',
      margin: '0 0 8px 0'
    }
  }, format.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      color: '#6E5B61',
      margin: 0
    }
  }, format.description)))));
}
Object.assign(__ds_scope, { FormatsSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing_page/FormatsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing_page/HeroSection.jsx
try { (() => {
/**
 * Landing Page – Hero Section
 */

function HeroSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '600px',
      padding: '64px 24px',
      background: 'linear-gradient(135deg, #FBF6F4 0%, #FFFFFF 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '48px',
      fontWeight: 700,
      color: '#B81D38',
      margin: '0 0 16px 0',
      lineHeight: '1.2'
    }
  }, "\u0421\u0442\u0430\u043D\u044C \u0434\u043E\u043D\u043E\u0440\u043E\u043C \u2014 \u0441\u043F\u0430\u0441\u0438 \u0436\u0438\u0437\u043D\u044C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '24px',
      color: '#2B2126',
      margin: '0 0 32px 0',
      fontWeight: 400
    }
  }, "\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0430\u044F \u0430\u043A\u0446\u0438\u044F: ", /*#__PURE__*/React.createElement("strong", null, "20 \u0430\u043F\u0440\u0435\u043B\u044F 2027"), ", \u043A\u043E\u0440\u043F\u0443\u0441 \u0420\u042D\u0423"), /*#__PURE__*/React.createElement("button", {
    style: {
      backgroundColor: '#B81D38',
      color: 'white',
      border: 'none',
      padding: '16px 48px',
      fontSize: '18px',
      fontWeight: 600,
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 200ms'
    },
    onMouseEnter: e => e.target.style.backgroundColor = '#8A1228',
    onMouseLeave: e => e.target.style.backgroundColor = '#B81D38'
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0434\u043E\u043D\u0430\u0446\u0438\u044E")));
}
Object.assign(__ds_scope, { HeroSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing_page/HeroSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing_page/RegistrationSection.jsx
try { (() => {
/**
 * Landing Page – Registration Section
 */

function RegistrationSection() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    vkLink: '',
    school: '',
    groupNumber: '',
    contraindications: false,
    agreedToDonate: false
  });
  const handleChange = e => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert('Спасибо за регистрацию! Мы вскоре свяжемся с вами.');
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 24px',
      backgroundColor: '#FBF6F4'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '600px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '36px',
      fontWeight: 700,
      color: '#2B2126',
      marginBottom: '16px',
      textAlign: 'center'
    }
  }, "\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0430\u044F \u0430\u043A\u0446\u0438\u044F"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      color: '#6E5B61',
      textAlign: 'center',
      marginBottom: '32px'
    }
  }, "20 \u043D\u043E\u044F\u0431\u0440\u044F 2027 \u2022 3 \u043A\u043E\u0440\u043F\u0443\u0441 \u0420\u042D\u0423"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(43, 33, 38, 0.12)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 600,
      fontSize: '14px'
    }
  }, "\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "fullName",
    value: formData.fullName,
    onChange: handleChange,
    required: true,
    placeholder: "\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432",
    style: {
      width: '100%',
      padding: '12px',
      border: '1px solid #C9B7BC',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 600,
      fontSize: '14px'
    }
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D *"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    name: "phone",
    value: formData.phone,
    onChange: handleChange,
    required: true,
    placeholder: "+7 (999) 123-45-67",
    style: {
      width: '100%',
      padding: '12px',
      border: '1px solid #C9B7BC',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 600,
      fontSize: '14px'
    }
  }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0412\u041A"), /*#__PURE__*/React.createElement("input", {
    type: "url",
    name: "vkLink",
    value: formData.vkLink,
    onChange: handleChange,
    placeholder: "https://vk.com/yourprofile",
    style: {
      width: '100%',
      padding: '12px',
      border: '1px solid #C9B7BC',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 600,
      fontSize: '14px'
    }
  }, "\u0412\u044B\u0441\u0448\u0430\u044F \u0448\u043A\u043E\u043B\u0430"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "school",
    value: formData.school,
    onChange: handleChange,
    placeholder: "\u0412\u0430\u0448\u0430 \u0448\u043A\u043E\u043B\u0430",
    style: {
      width: '100%',
      padding: '12px',
      border: '1px solid #C9B7BC',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 600,
      fontSize: '14px'
    }
  }, "\u041D\u043E\u043C\u0435\u0440 \u0433\u0440\u0443\u043F\u043F\u044B"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "groupNumber",
    value: formData.groupNumber,
    onChange: handleChange,
    placeholder: "\u0411-123",
    style: {
      width: '100%',
      padding: '12px',
      border: '1px solid #C9B7BC',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: "contraindications",
    name: "contraindications",
    checked: formData.contraindications,
    onChange: handleChange,
    style: {
      width: '20px',
      height: '20px',
      accentColor: '#B81D38'
    }
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "contraindications",
    style: {
      fontSize: '14px',
      cursor: 'pointer'
    }
  }, "\u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0432\u0430\u0441 \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: "agreedToDonate",
    name: "agreedToDonate",
    checked: formData.agreedToDonate,
    onChange: handleChange,
    required: true,
    style: {
      width: '20px',
      height: '20px',
      accentColor: '#B81D38'
    }
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "agreedToDonate",
    style: {
      fontSize: '14px',
      cursor: 'pointer'
    }
  }, "\u0425\u043E\u0447\u0443 \u0441\u0434\u0430\u0442\u044C \u043A\u0440\u043E\u0432\u044C! *")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      backgroundColor: '#B81D38',
      color: 'white',
      border: 'none',
      padding: '14px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 200ms',
      marginTop: '8px'
    },
    onMouseEnter: e => e.target.style.backgroundColor = '#8A1228',
    onMouseLeave: e => e.target.style.backgroundColor = '#B81D38'
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"))));
}
Object.assign(__ds_scope, { RegistrationSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing_page/RegistrationSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing_page/StatisticsSection.jsx
try { (() => {
/**
 * Landing Page – Statistics Section
 */

function StatisticsSection() {
  const stats = [{
    label: 'Подписчиков в VK',
    value: '1 951',
    unit: '(цель: 2 500)'
  }, {
    label: 'Охват кампании',
    value: '70%',
    unit: 'не знали о проекте'
  }, {
    label: 'Готовы участвовать',
    value: '71%',
    unit: 'если узнают'
  }, {
    label: 'Целевой охват',
    value: '40%',
    unit: '(10 000 чел.)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 24px',
      backgroundColor: '#FBF6F4'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '36px',
      fontWeight: 700,
      color: '#2B2126',
      marginBottom: '48px',
      textAlign: 'center',
      margin: 0
    }
  }, "\u0426\u0438\u0444\u0440\u044B \u0438 \u0444\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px'
    }
  }, stats.map((stat, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(43, 33, 38, 0.12)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: '#6E5B61',
      fontWeight: 600,
      marginBottom: '12px',
      textTransform: 'uppercase'
    }
  }, stat.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '36px',
      fontWeight: 700,
      color: '#B81D38',
      marginBottom: '8px'
    }
  }, stat.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: '#C9B7BC'
    }
  }, stat.unit)))));
}
Object.assign(__ds_scope, { StatisticsSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing_page/StatisticsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing_page/ds-base.js — disabled: styles are linked explicitly by the host page

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.AboutSection = __ds_scope.AboutSection;

__ds_ns.DonationProcessSection = __ds_scope.DonationProcessSection;

__ds_ns.FAQSection = __ds_scope.FAQSection;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.FormatsSection = __ds_scope.FormatsSection;

__ds_ns.HeroSection = __ds_scope.HeroSection;

__ds_ns.RegistrationSection = __ds_scope.RegistrationSection;

__ds_ns.StatisticsSection = __ds_scope.StatisticsSection;

})();
