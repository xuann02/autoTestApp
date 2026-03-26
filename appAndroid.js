const apps = [
  "com.sima.cfa",
  "com.sima.ccna",
  "com.sima.ceh",
  "org.sima.g1test",
  "com.sima.ged",
  // "com.sima.cen",
  // "com.simple.comptiasecurityplus",
  // "com.sima.naplex",
  // "com.sima.hvac",
  // "com.sima.parapro",
  // "com.sima.journeymanelectrician",
  // "com.sima.wonderlic",
  // "com.sima.cpa",
  // "com.sima.nate",
  // "com.sima.cna",
  // "com.sima.comptiaitf",
  // "com.sima.drivingtheoryuk",
  // "com.sima.part",
  // "com.sima.az900",
  // "com.sima.tabe",
  // "com.sima.apsychology",
  // "com.sima.pert",
  // "com.sima.servsafee",
  // "com.sima.fsc",
  // "com.sima.phr",
  // "com.sima.cdl",
  // "com.sima.sie",
  // "com.sima.nclexrntest",
  // "com.sima.hisettest",
  // "com.sima.accuplacertest",
  // "com.sima.chspe",
  // "com.sima.awscerifiedsysopsadministrator",
  // "com.sima.mblextest",
  // "com.sima.cissptest",
  // "com.sima.tsi",
  // "com.sima.ccsp",
  // "com.sima.vtne",
  // "com.sima.hesia2test",
  // "com.sima.pl300",
  // "com.simple.comptianetworkplus",
  // "com.sima.nasmcpt",
  // "com.sima.asvab",
  // "com.sima.pccn",
  // "com.sima.gretest",
  // "com.sima.ccat",
  // "com.sima.cbest",
  // "com.sima.comptiacysa",
  // "com.sima.awscertifieddeveloper",
  // "com.sima.realestatelicense",
  // "com.sima.epa",
  // "com.sima.tasc",
  // "com.sima.apush",
  // "com.simple.comptiaaplus",
  // "com.sima.hamradio",
  // "com.sima.linuxplus",
  // "com.sima.asetseries",
  // "com.sima.aseaseries",
  // "com.sima.aucitizenship",
  // "com.sima.projectplus",
  // "com.sima.pmp",
  // "com.sima.ptcb",
  // "com.sima.phlebotomy",
  // "com.sima.emtb",
  // "com.sima.nmls",
  // "com.sima.cosmetology",
  // "com.sima.teas",
  // "com.sima.cast",
  // "com.sima.paramedic",
  // "com.sima.capm",
  // "com.sima.cpce",
  // "com.sima.awscp",
  // "com.sima.awssaa"
];


// Sử dụng output.index thay vì state.index để Maestro ghi nhớ giá trị này
if (typeof output.index === "undefined") {
 output.index = 0
}


if (output.index >= apps.length) {
 output.done = true
} else {
 // Lấy appId dựa trên index hiện tại lưu trong output
 output.appId = apps[output.index]
  // Tăng index và lưu trực tiếp vào output
 output.index++


 // Kiểm tra xem đã hết danh sách chưa
 output.done = output.index >= apps.length
}


console.log("Running app:", output.appId)