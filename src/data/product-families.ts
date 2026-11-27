export type ProductPhoto = { file: string; caption: string; fit?: 'cover' | 'contain' };

export type ProductFamily = {
  id: string;
  name: string;
  desc: string;
  process: string;
  photos: ProductPhoto[];
};

export const productFamilies: Record<'en' | 'zh', ProductFamily[]> = {
  en: [
    {
      id: 'gears-ring-gears',
      name: 'Gears & Ring Gears',
      desc: 'Internal and external ring gears, gear wheels, and specialty gear forms, machined and finish-ground to customer specification.',
      process: 'Gear cutting · heat treatment · gear grinding',
      photos: [
        { file: 'IMG_0099_external-ring-gear.webp', caption: 'External ring gear' },
        { file: 'IMG_0143_internal-ring-gear.webp', caption: 'Internal ring gear' },
        { file: 'internal-ring-gear.webp', caption: 'Internal ring gear' },
        { file: 'internal-tooth-ring.webp', caption: 'Internal tooth ring' },
        { file: 'spoked-wheel.webp', caption: 'Spoked gear wheel' },
        { file: 'large-helical-gear.webp', caption: 'Large helical gear' },
        { file: 'helical-ring-stack.webp', caption: 'Helical ring gears' },
        { file: 'gear-wheel-row.webp', caption: 'Gear wheels' },
        { file: 'IMG_0103_single-gear.webp', caption: 'Single gear' },
      ],
    },
    {
      id: 'pinions-gear-shafts',
      name: 'Pinions & Gear Shafts',
      desc: 'Pinions and gear shafts produced from blank through finished teeth, including jacking gear shafts for offshore platforms.',
      process: 'Blank machining · gear cutting · heat treatment · finish grinding',
      photos: [
        { file: 'upright-pinion-shaft.webp', caption: 'Upright pinion shaft' },
        { file: 'long-pinion-shaft.webp', caption: 'Long pinion shaft', fit: 'contain' },
        { file: 'four-pinion-shafts.webp', caption: 'Pinion shafts' },
        { file: 'IMG_0121_pinion-shafts-front.webp', caption: 'Pinion shafts, front view' },
        { file: 'coarse-pinion-batch.webp', caption: 'Pinion batch' },
        { file: 'pinion-hub-detail.webp', caption: 'Pinion hub detail' },
        { file: 'helical-pinion-and-wheel.webp', caption: 'Helical pinion and wheel' },
        { file: 'flanged-gear-shaft.webp', caption: 'Flanged gear shaft' },
        { file: 'IMG_0130_jacking-shaft.webp', caption: 'Jacking gear shaft' },
      ],
    },
    {
      id: 'planetary-compound',
      name: 'Planetary, Compound & Specialty Gears',
      desc: 'Planet carriers, sun gears, double gears, and compound assemblies for planetary and heavy drive systems.',
      process: 'Hobbing · shaping · carburizing · gear grinding',
      photos: [
        { file: 'planet-carrier.webp', caption: 'Planet carrier' },
        { file: 'planet-gear-pin.webp', caption: 'Planet gear pin' },
        { file: 'sun-gear.webp', caption: 'Sun gear' },
        { file: 'IMG_0129_wind-sun-gear.webp', caption: 'Sun gear for wind drive' },
        { file: 'IMG_0125_double-gear.webp', caption: 'Double gear' },
        { file: 'compound-gear-batch.webp', caption: 'Compound gears' },
        { file: 'drum-gear-coupling.webp', caption: 'Drum gear coupling' },
        { file: 'welded-gear.webp', caption: 'Welded gear' },
        { file: 'eccentric-shaft.webp', caption: 'Eccentric shaft' },
      ],
    },
    {
      id: 'shafts-components',
      name: 'Custom Shafts & Related Components',
      desc: 'Shafts, sleeves, housings, and related components machined, heat-treated, and ground to drawing.',
      process: 'Turning · Q&T · precision grinding',
      photos: [
        { file: 'support-shaft.webp', caption: 'Support shaft' },
        { file: 'gear-shaft-and-sleeve.webp', caption: 'Gear shaft and sleeve' },
        { file: 'gear-shaft-batch.webp', caption: 'Gear shafts' },
        { file: 'stacked-shafts.webp', caption: 'Shafts' },
        { file: 'painted-housing.webp', caption: 'Painted housing' },
        { file: 'pin-batch.webp', caption: 'Pins' },
        { file: 'packed-gears-side.webp', caption: 'Finished gears, packed' },
        { file: 'packed-gears-top.webp', caption: 'Finished gears, packed (top view)' },
      ],
    },
  ],
  zh: [
    {
      id: 'gears-ring-gears',
      name: '齿轮与齿圈',
      desc: '内齿圈、外齿圈、齿轮盘及特种齿形件，按客户规格加工并精磨至成品。',
      process: '滚齿 · 热处理 · 磨齿',
      photos: [
        { file: 'IMG_0099_external-ring-gear.webp', caption: '外齿圈' },
        { file: 'IMG_0143_internal-ring-gear.webp', caption: '内齿圈' },
        { file: 'internal-ring-gear.webp', caption: '内齿圈' },
        { file: 'internal-tooth-ring.webp', caption: '内齿圈（齿面）' },
        { file: 'spoked-wheel.webp', caption: '辐板齿轮' },
        { file: 'large-helical-gear.webp', caption: '大型斜齿轮' },
        { file: 'helical-ring-stack.webp', caption: '人字齿 / 重载齿' },
        { file: 'gear-wheel-row.webp', caption: '现场产品照片' },
        { file: 'IMG_0103_single-gear.webp', caption: '单件齿轮' },
      ],
    },
    {
      id: 'pinions-gear-shafts',
      name: '小齿轮与齿轮轴',
      desc: '从毛坯到成齿的小齿轮与齿轮轴，包括海上钻井平台爬升齿轮轴。',
      process: '车削 · 滚齿 · 热处理 · 精磨',
      photos: [
        { file: 'upright-pinion-shaft.webp', caption: '立式小齿轮轴' },
        { file: 'long-pinion-shaft.webp', caption: '长小齿轮轴', fit: 'contain' },
        { file: 'four-pinion-shafts.webp', caption: '小齿轮轴' },
        { file: 'IMG_0121_pinion-shafts-front.webp', caption: '小齿轮轴（正面）' },
        { file: 'coarse-pinion-batch.webp', caption: '小齿轮批量' },
        { file: 'pinion-hub-detail.webp', caption: '小齿轮轮毂细节' },
        { file: 'helical-pinion-and-wheel.webp', caption: '斜齿小齿轮与大齿轮' },
        { file: 'flanged-gear-shaft.webp', caption: '法兰齿轮轴' },
        { file: 'IMG_0130_jacking-shaft.webp', caption: '爬升齿轮轴' },
      ],
    },
    {
      id: 'planetary-compound',
      name: '行星、双联及特种齿轮',
      desc: '行星架、太阳轮、双联齿轮及复合齿轮组件，用于行星传动与重载驱动系统。',
      process: '滚齿 · 插齿 · 渗碳淬火 · 磨齿',
      photos: [
        { file: 'planet-carrier.webp', caption: '行星架' },
        { file: 'planet-gear-pin.webp', caption: '行星轮销轴' },
        { file: 'sun-gear.webp', caption: '太阳轮' },
        { file: 'IMG_0129_wind-sun-gear.webp', caption: '风电太阳轮' },
        { file: 'IMG_0125_double-gear.webp', caption: '双联齿轮' },
        { file: 'compound-gear-batch.webp', caption: '复合齿轮批量' },
        { file: 'drum-gear-coupling.webp', caption: '鼓形齿联轴器' },
        { file: 'welded-gear.webp', caption: '焊接齿轮' },
        { file: 'eccentric-shaft.webp', caption: '偏心轴' },
      ],
    },
    {
      id: 'shafts-components',
      name: '定制轴类及相关零件',
      desc: '按图纸加工、热处理并磨削的轴、轴套、壳体及相关零件。',
      process: '车削 · 调质 · 精磨',
      photos: [
        { file: 'support-shaft.webp', caption: '支撑轴' },
        { file: 'gear-shaft-and-sleeve.webp', caption: '齿轮轴与轴套' },
        { file: 'gear-shaft-batch.webp', caption: '齿轮轴批量' },
        { file: 'stacked-shafts.webp', caption: '轴类零件' },
        { file: 'painted-housing.webp', caption: '涂漆壳体' },
        { file: 'pin-batch.webp', caption: '销轴' },
        { file: 'packed-gears-side.webp', caption: '成品齿轮装箱（侧面）' },
        { file: 'packed-gears-top.webp', caption: '成品齿轮装箱（俯视）' },
      ],
    },
  ],
};
