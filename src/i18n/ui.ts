export type Lang = 'zh' | 'en';

export const ui = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      equipment: '能力与设备',
      products: '产品展示',
      contact: '联系我们',
      quote: '询价 / 咨询',
    },
    otherLang: 'English',
    footer: {
      blurb: '南京长升机械工程有限公司专业从事齿轮全序加工与金属热处理，服务海洋钻井平台、风电、矿用、石化、冶金与建材等行业。',
      pages: '导航',
      capabilities: '核心能力',
      contact: '联系我们',
      rights: '版权所有。',
      gearMachining: '齿轮加工',
      heatTreatment: '金属热处理',
      inspection: '检测计量',
      responseTime: '我们会在 1–2 个工作日内回复。',
    },
    cta: {
      title: '专业的齿轮与热处理供应商 · 始于 2006',
      subtitle: '',
      button: '联系我们',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      equipment: 'Capabilities',
      products: 'Products',
      contact: 'Contact',
      quote: 'Get a Quote',
    },
    otherLang: '中文',
    footer: {
      blurb: 'Nanjing Changsheng Machinery Engineering Co., Ltd. specializes in full-process gear machining and metal heat treatment, serving offshore drilling, wind power, mining, petrochemical, metallurgy, and building-materials industries.',
      pages: 'Pages',
      capabilities: 'Capabilities',
      contact: 'Contact',
      rights: 'All rights reserved.',
      gearMachining: 'Gear machining',
      heatTreatment: 'Heat treatment',
      inspection: 'Inspection',
      responseTime: 'We reply within 1–2 business days.',
    },
    cta: {
      title: 'Professional gear & heat-treatment supplier since 2006',
      subtitle: '',
      button: 'Contact Us',
    },
  },
} as const;
