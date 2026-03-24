const apps = [
  "com.abc.cen",
  "com.abc.comptiasecurityplus",
  "com.abc.naplex",
  "com.abc.hvac",
  "com.abc.parapro",
  "com.abc.journeymanelectriciantest",
  "com.abc.wonderlic",
  "com.abc.cpa",
  "com.abc.nate",
  "com.abc.cna",
  "com.abc.comptiaitf",
  "com.abc.drivingtheoryuk",
  "com.abc.part",
  "com.abc.ceh",
  "com.abc.maf",
  "com.abc.tabe",
  "com.abc.apsychology",
  "com.abc.pert",
  "com.abc.g1test",
  "com.abc.servsafee",
  "com.abc.fsc",
  "com.abc.phrtest",
  "com.abc.cdltest",
  "com.abc.sie",
  "com.abc.nclexrntest",
  "com.abc.hisettest",
  "com.abc.accuplacertest",
  "com.abc.chspe",
  "com.abc.mblextest",
  "com.abc.cissptest",
  "com.abc.tsi",
  "com.abc.ccsp",
  "com.abc.vtne",
  "com.abc.hesia2test",
  "com.abc.pl300",
  "com.abc.comptianetworkplus",
  "com.abc.nasmcpt",
  "com.abc.nswdkt",
  "com.abc.asvabtest",
  "com.abc.pccn",
  "com.abc.gretest",
  "com.abc.ccat",
  "com.abc.cbest",
  "com.abc.gedtest",
  "com.abc.comptiacysa",
  "com.abc.realestatelicense",
  "com.abc.epa",
  "com.abc.tasc",
  "com.abc.apush",
  "com.abc.comptiaaplus",
  "com.abc.dmvtest",
  "com.abc.ase",
  "com.abc.cfa",
  "com.abc.pmptest",
  "com.abc.ptce",
  "com.abc.phlebotomy",
  "com.abc.emtbtest",
  "com.abc.nmls",
  "com.abc.teastest",
  "com.abc.cast",
  "com.abc.paramedic",
  "com.abc.capm",
  "com.abc.cpce",
  "com.abc.awscp",
  "com.abc.aws"
]


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
