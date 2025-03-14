const url = "http://localhost/index.php"
Cypress.config('chromeWebSecurity', false); 
describe('template spec',() =>{
  it('TC1',()=>{
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(2000)
    cy.get('.rooms > a > span').click()
    cy.get('#booking_3 > .icon-addtocart > .mobile').click()
    cy.get('#topic').type('ประชุม')
    cy.get('#attendees').type('100')
    cy.get('#phone').type('0880880881')
    cy.get('#begin_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#begin_time_display').type('02.02')
    cy.get('#end_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#end_time_display').type('02.03')
    cy.get('#accessories > :nth-child(1) > input').click({ force: true })
    cy.get('#accessories > :nth-child(2) > input').click({ force: true })
    cy.get('#accessories > :nth-child(3) > input').click({ force: true })
    cy.get('#accessories > :nth-child(4) > input').click({ force: true })
    cy.get('.button').click({ force: true });
    cy.wait(1000)
  })
  it('TC2',()=>{
    //ไม่ใส่หัวข้อ
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(2000)
    cy.get('.rooms > a > span').click()
    cy.get('#booking_3 > .icon-addtocart > .mobile').click()
    cy.get('#attendees').type('100')
    cy.get('#begin_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#begin_time_display').type('02.02')
    cy.get('#end_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#end_time_display').type('02.03')
    cy.get('.button').click({ force: true });
    cy.wait(1000)
  })
  it('TC3',()=>{
    //ไม่กรอกจำนวนผู้เข้า
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(2000)
    cy.get('.rooms > a > span').click()
    cy.get('#booking_3 > .icon-addtocart > .mobile').click()
    cy.get('#topic').type('ประชุม')
    cy.get('#begin_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#begin_time_display').type('02.02')
    cy.get('#end_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#end_time_display').type('02.03')
    cy.get('.button').click({ force: true });
    cy.wait(1000)
  })
  it('TC4',()=>{
    //กรอกจำนวนผู้เข้ามากกว่าที่รองรับ
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(2000)
    cy.get('.rooms > a > span').click()
    cy.get('#booking_3 > .icon-addtocart > .mobile').click()
    cy.get('#topic').type('ประชุม')
    cy.get('#attendees').type('101')
    cy.get('#begin_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#begin_time_display').type('02.02')
    cy.get('#end_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#end_time_display').type('02.03')
    cy.get('.button').click({ force: true });
    cy.wait(1000)
  })
  it('TC5',()=>{
    //ไม่ใส่เบอร์
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(2000)
    cy.get('.rooms > a > span').click()
    cy.get('#booking_3 > .icon-addtocart > .mobile').click()
    cy.get('#topic').type('ประชุม')
    cy.get('#attendees').type('100')
    cy.get('#phone').clear();
    cy.get('#begin_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#begin_time_display').type('02.02')
    cy.get('#end_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#end_time_display').type('02.03')
    cy.get('.button').click({ force: true });
    cy.wait(1000)
  })
  it('TC6',()=>{
    //จองย้อนหลังวัน
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(2000)
    cy.get('.rooms > a > span').click()
    cy.get('#booking_3 > .icon-addtocart > .mobile').click()
    cy.get('#topic').type('ประชุม')
    cy.get('#attendees').type('100')
    cy.get('#begin_date_display').click()
    cy.get('[title="23 ต.ค. 2566"]').click()
    cy.get('#begin_time_display').type('02.02')
    cy.get('#end_date_display').click()
    cy.get('[title="24 ต.ค. 2566"]').click()
    cy.get('#end_time_display').type('02.03')
    cy.get('.button').click({ force: true });
    cy.wait(1000)
  })
  it('TC7',()=>{
    //จองวันที่สิ้นสุดย้อนกลับ
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(2000)
    cy.get('.rooms > a > span').click()
    cy.get('#booking_3 > .icon-addtocart > .mobile').click()
    cy.get('#topic').type('ประชุม')
    cy.get('#attendees').type('100')
    cy.get('#begin_date_display').click()
    cy.get('[title="24 ต.ค. 2566"]').click()
    cy.get('#begin_time_display').type('02.02')
    cy.get('#end_date_display').click()
    cy.get('[title="23 ต.ค. 2566"]').click()
    cy.get('#end_time_display').type('02.03')
    cy.get('.button').click({ force: true });
    cy.wait(1000)
  })
  it('TC8',()=>{
    //เวลาสิ้นสุดถึงก่อนกำหนด
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(2000)
    cy.get('.rooms > a > span').click()
    cy.get('#booking_3 > .icon-addtocart > .mobile').click()
    cy.get('#topic').type('ประชุม')
    cy.get('#attendees').type('100')
    cy.get('#begin_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#begin_time_display').type('07.39')
    cy.get('#end_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#end_time_display').type('06.00')
    cy.get('.button').click({ force: true });
    cy.wait(1000)
  })
  it('TC9',()=>{
    //กรอกเบอร์เกินจำนวน
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(2000)
    cy.get('.rooms > a > span').click()
    cy.get('#booking_3 > .icon-addtocart > .mobile').click()
    cy.get('#topic').type('ประชุม')
    cy.get('#attendees').type('100')
    cy.get('#phone').clear();
    cy.get('#phone').type('012345678901234');
    cy.get('#begin_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#begin_time_display').type('02.02')
    cy.get('#end_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#end_time_display').type('02.03')
    cy.get('.button').click({ force: true });
    cy.wait(1000)
  })
  it('TC10',()=>{
    //กรอกเบอร์ประสมอักษร
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(2000)
    cy.get('.rooms > a > span').click()
    cy.get('#booking_3 > .icon-addtocart > .mobile').click()
    cy.get('#topic').type('ประชุม')
    cy.get('#attendees').type('100')
    cy.get('#phone').clear();
    cy.get('#phone').type('01234-86ปx78@');
    cy.get('#begin_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#begin_time_display').type('02.02')
    cy.get('#end_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#end_time_display').type('02.03')
    cy.get('.button').click({ force: true });
    cy.wait(1000)
  })

  it('TC11',()=>{
    //จองห้องวันเวลาเหมือนกัน
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(2000)
    cy.get('.rooms > a > span').click()
    cy.get('#booking_3 > .icon-addtocart > .mobile').click()
    cy.get('#topic').type('ประชุม')
    cy.get('#attendees').type('100')
    cy.get('#begin_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#begin_time_display').type('13.00')
    cy.get('#end_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#end_time_display').type('13.10')
    cy.get('#accessories > :nth-child(1) > input').click({ force: true })
    cy.get('#accessories > :nth-child(2) > input').click({ force: true })
    cy.get('#accessories > :nth-child(3) > input').click({ force: true })
    cy.get('#accessories > :nth-child(4) > input').click({ force: true })
    cy.get('.button').click({ force: true });
    cy.wait(1000)
    cy.get('.rooms > a > span').click()
    cy.get('#booking_3 > .icon-addtocart > .mobile').click()
    cy.get('#topic').type('ประชุม')
    cy.get('#attendees').type('100')
    cy.get('#begin_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#begin_time_display').type('13.00')
    cy.get('#end_date_display').click()
    cy.get('[title="27 ต.ค. 2566"]').click()
    cy.get('#end_time_display').type('13.10')
    cy.get('#accessories > :nth-child(1) > input').click({ force: true })
    cy.get('#accessories > :nth-child(2) > input').click({ force: true })
    cy.get('#accessories > :nth-child(3) > input').click({ force: true })
    cy.get('#accessories > :nth-child(4) > input').click({ force: true })
    cy.get('.button').click({ force: true });
    cy.wait(1000)
  })
})