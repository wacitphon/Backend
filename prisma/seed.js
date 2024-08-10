const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


// 01
// const Image = [
//   {url : "noname"},
// ]

//02
// const device = [
//   {type : "01",brand : "APPLE",Detail: "CPU : Intel Core i5-4210U (1.70 GHz) VGA : Intel HD Graphics 4400 RAM : 8 GB DDR3L Harddisk : 500 GB 5400 RPM",serialnumber: "A001"},
// ]

//03
const repair = [
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},
  {detail: "เปิดเครื่องแล้วไม่แสดงผลหน้าจอดำอย่างเดียว",requesDate: new Date(),status: "กำลังดำเนินการ ",deviceId: 1 , userId:1, customerId : 1},

]

// const customer = [
//   {customername: "John",email: "john",phone: 123353,userId: 1}
// ]

//04
//  const user = [
//    { username : 'user', password: '1234',email:'user@gmail.com', phone : 4423423 ,profileId: 1 ,},

//  ]

 
const run = async () => {
  // await prisma.user.createMany({
  //   data : user
  // })

  // await prisma.device.createMany({
  //   data : device
  // })

    await prisma.repair.createMany({
    data : repair
  })

// }

// await prisma.customer.createMany({
//   data : customer
// })

}


run()

