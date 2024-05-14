import React from 'react';
import { Form } from 'react-bootstrap';
import { BsFillLightningFill } from 'react-icons/bs' 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; import 'bootstrap/dist/css/bootstrap.min.css'; import './App.css';
function ColorSchemesExample() {
  return (
    <>
      <div className='page1'>
        <BsFillLightningFill className="position-absolute top-0 start-0" size={45} style={{ fontSize: '4rem', color:'white', marginLeft:'10px', marginTop:'10px' }} />
        <p className="position-absolute top-0 end-0" style={{color:'whitesmoke', marginRight:'10px',marginTop:'10px',fontSize:'15px'}}>PAGE 1</p>
        <Col>
          <Row>
            <p className='p1'>CAR SERVICE</p>
          </Row>
          <Row>
            <p className='p2'>TRAVEL IN <br /> LUXURY AND <br /> STYLE</p>
          </Row>
        </Col>
      </div>

      <div>
        <Row>
          <Col md={6} lg={6} xl={6}>
            <div className='black'>
              <img src="//images03.nicepage.com/c461c07a441a5d220e8feb1a/07a9666d670150be8047edcd/billionphotos1010979min.jpg" style={{marginTop:"70px", height:"400px",width:"700px",marginLeft:'70px',marginBottom:'400px'}} alt="Car" />
            </div>
          </Col>
          <Col style={{marginLeft:'200px'}}>
            <div style={{marginTop:"200px"}}>
              <div className="line"></div>
              <h2 style={{color:'#333333'}}>Best Car</h2>
              <h5 style={{fontWeight:'bold',color:'black',marginTop:'10px',marginBottom:'10px'}}>SERVICE</h5>
              <p style={{color:'black', justifyContent:'left'}}>A regular service schedule can help<br /> keep your car running at its best. A regular<br /> service schedule can help keep your car<br /> running at its best.</p>
              <a href="#ok" className="ctn">READ MORE</a>
            </div>
          </Col>
        </Row>
      </div>
      <div>
  <Row>
    <Col xs={6} md={3} style={{marginTop:'85px',marginLeft:'70px'}}>
      <h5 style={{color:'black'}}>RENTAL CAR SERVICES</h5>
      <p style={{color:'black'}}>
        Find the best possible rental car rate. Compare<br /> 
        rates worldwide and save up to 60% on deals from<br /> 
        over 1,053 car rental companies.
      </p>
    </Col>
    <Col xs={6} md={2} style={{marginTop:'95px',marginLeft:'45px'}}>
      <img style={{height:'70px',width:'70px'}} src='https://static.vecteezy.com/system/resources/thumbnails/000/599/083/small/location.jpg' alt='location'/>
      <h5>LOCATION</h5>
    </Col>
    <Col xs={6} md={2} style={{marginTop:'65px'}}>
      <img style={{height:'100px',width:'100px'}} src='https://media.istockphoto.com/id/1425541694/vector/car-front-line-icon-outline-symbol-car-sign-in-linear-style.jpg?s=612x612&w=0&k=20&c=Aw952Z0sbFP5QjsbYcvrrp2V-euub0iw0BQkxWdl_xs=' alt='cars'/>
      <h5>250+CARS</h5>
    </Col>
    <Col xs={6} md={2} style={{marginTop:'65px'}}>
      <img style={{height:'100px',width:'100px'}} src='https://media.istockphoto.com/id/1279949844/vector/a-bunch-of-users-icon-illustration-in-line-style-social-media-group-profile-icon-friends.jpg?s=170667a&w=0&k=20&c=WZKUfxUB7ASWf9ev3DreoZY9MwtN2yfF949TqYe3R_4=' alt='happyusers'/>
      <h5>HAPPY USERS</h5>
    </Col>
  </Row>
</div>

<div class='black1'>
  <Row>
    <Col>
      <div class='red'>
        <img style={{marginTop:'50px',height:'400px',width:'500px'}} src='https://images03.nicepage.com/c461c07a441a5d220e8feb1a/b0725fc4aad55c67b0e5196e/21421.jpg' alt='girl' />
      </div>
      <h5 style={{marginLeft:'150px',marginBottom:'20px',color:'whitesmoke'}}>SEARCH 36,000+ CAR RENTAL<br />LOCATIONS WORLDWIDE</h5>
      <p style={{marginLeft:'150px',marginBottom:'10px',color:'whitesmoke'}}>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit nullam nunc justo sagittis suscipit<br />ultrices</p>
      <a href="#ok" className="ctn1">FIND CAR DEALS</a>
    </Col>
    <Col>
      <h5 style={{marginTop:'150px',marginBottom:'20px',marginLeft:'30px',color:'whitesmoke'}}>CAR RENTAL</h5>
      <h2 style={{color:'#E3242B',marginLeft:'30px',marginBottom:'20px'}}>Service</h2>
      <p style={{color:'whitesmoke',marginLeft:'30px',marginBottom:'80px'}}>A regular service can help keep your car running at its best. A<br />regular service schedule can help your car running at its best.</p>
      <img style={{marginLeft:'30px'}} src='https://img.freepik.com/premium-photo/happy-woman-sitting-new-automobile_251859-1818.jpg' alt='girl red car'/>
    </Col>
  </Row>
  <Row>
    <Col>
      <img style={{marginLeft:'400px',marginTop:'100px',height:'auto',width:'auto'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mTMkx-Z9NizUpPyRGyKNNf4TM7mAvqrYCA&usqp=CAU' alt='Blackcar'/>
    </Col>
    <Col>
      <h2 style={{marginTop:'100px',marginLeft:'200px',color:'whitesmoke'}}>Safe. Relaxing.<br /> Good to ride in.</h2>
      <a href="#ok" className="ctn1" style={{marginLeft:'250px',marginTop:'10px'}}>READ MORE</a>
    </Col>
  </Row>
</div>

<div align="center">
  <h2 style={{marginTop:'50px',marginBottom:'20px',color:'#E3242B'}}><font>Our Technologies</font></h2>
  <Row>
    <Col>
      <img style={{height:'200px',width:'200px'}} src="https://images01.nicepage.com/d4/59/d459afc2165bd356465b67137677beca.png" alt='img1'></img>
      <p style={{fontWeight:'bold'}}>SMARTLINQ</p>
    </Col>
    <Col>
      <img style={{height:'200px',width:'200px'}} src="https://images01.nicepage.com/fe/a9/fea9470f91f7e42de415eb02d5347e26.png" alt='img2'></img>
      <p style={{fontWeight:'bold'}}>EPIQ</p>
    </Col>
    <Col>
      <img style={{height:'200px',width:'200px'}} src="https://images01.nicepage.com/01/94/01946e8223d3360e8f4566195ce53ab1.png" alt='img3'></img>
      <p style={{fontWeight:'bold'}}>APEX</p>
    </Col>
    <Col>
      <img style={{height:'200px',width:'200px'}} src="https://images01.nicepage.com/a3/20/a320795635bf6543ba2a588ababe6830.png" alt='img4'></img>
      <p style={{fontWeight:'bold'}}>SMARTAIR</p>
    </Col>
    <Col>
      <img style={{height:'200px',width:'200px'}} src="https://images01.nicepage.com/91/55/915548cb61ae31d2aa45ae8cbc9dc5e8.png" alt='img5'></img>
      <p style={{fontWeight:'bold'}}>SMARTNAV</p>
    </Col>
  </Row>
  <div>
    <Row>
      <Col md={6} lg={6} xl={6}>
        <div>
          <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/8a2bf951efa75894b957ed0c/pexelsphoto1545743.jpeg" style={{marginTop:"70px", height:"400px",width:"350px",marginLeft:'70px',marginBottom:'100px'}} alt="Car" />
        </div>
      </Col>
      <Col md={6} lg={6} xl={5}>
        <div style={{marginTop:"150px",marginLeft:'0'}} align="left">
          <h5 style={{fontWeight:'bold',marginBottom:'30px'}} ><font color="#E3242B">History Of Red Oval</font></h5>
          <p>Since 1939, Peterbilt has consistently set new standards for quality, reliability, performance and innovation. Our dedicated focus on serving the full range of customer needs and providing industry-leading satisfaction extends well beyond the sale of a new truck. Peterbilt and its dealer network support customers through exceptional service, parts sales, financing, leasing and rental, and advanced technologies.</p>
          <p><b>Today, you can purchase a Red Oval Certified truck with ease knowing your truck is the next best thing to new.</b></p>
        </div>
      </Col>
    </Row>
  </div>
</div>

<div>
  <Row>
    <Col className="remove-padding">
      <img style={{marginTop:'0px',width:'500px',height:'400px',marginLeft:'300px'}} src='https://static.toiimg.com/thumb/msid-79565959,width-1280,height-720,resizemode-4/.jpg' alt='audi'/>
    </Col>
    <Col className="remove-padding">
      <Row>
        <img style={{width:'300px',height:'200px'}} src='https://w0.peakpx.com/wallpaper/987/172/HD-wallpaper-2013-audi-r8-led-tail-lights-car.jpg' alt='audir8back'/>
        <div style={{backgroundColor:'white',width:'300px', marginTop:'50px'}}>
          <h2 style={{color:''}}>R8 Coupe Trims</h2>
          <a href="#ok" class="ctn2">READ MORE</a>
        </div>
      </Row>
      <Row>
        <div style={{backgroundColor:'#E3242B',width:'276px', marginLeft:'12px',height:'200px'}}>
          <h2 style={{color:'whitesmoke',marginTop:'10px'}}>Bask in the<br/> Limelight</h2>
          <p style={{color:'whitesmoke'}}>Sample text, Lorem ipsum dolor sit<br />amet, consectetur adipiscing </p>
        </div>
        <img className="remove-padding" style={{width:'300px',height:'200px'}} src='https://c4.wallpaperflare.com/wallpaper/165/601/250/audi-r8-v10-plus-2014-audi-r8-coupe-hd-wallpaper-preview.jpg' alt='audiR8front'></img>
      </Row>
    </Col>
  </Row>
  <div align="center" style={{marginTop:'75px'}}>
    <Row>
      <Col md={2} lg={2} xl={6}>
        <h4>LOCATION</h4>
        <p>28 Jackson Blvd Ste 1020 Chicago <br/>IL 60604-2340 </p>
        <br></br>
        <br></br>
        <br></br>
        <h5>FOLLOW US</h5>
        <div align="center">
          <img style={{height:'28px',width:'28px'}} src="https://www.pngitem.com/pimgs/m/20-209894_transparent-round-logo-png-round-facebook-icon-png.png" alt='img'></img>
          <img style={{height:'30px',width:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5U64KxCvh-QaG55dkj3kULgO8HnzKRb47Ng&usqp=CAU" alt='img'></img>
          <img style={{height:'30px',width:'30px'}} src="https://icon2.cleanpng.com/20180203/tde/kisspng-scalable-vector-graphics-clip-art-instagram-png-file-5a75716a6b9c74.4205918615176461864408.jpg" alt='img'></img>
          <img style={{height:'30px',width:'30px'}} src="https://e7.pngegg.com/pngimages/550/863/png-clipart-social-media-computer-icons-logo-google-google-plus-logo-social-media.png" alt='img'></img>
          <br></br>
          <br></br>
          <br></br>
          <h6><font color="grey">©2018 Privacy policy</font></h6>
        </div>
      </Col>
      <Col>
        <h1>CONTACT FORM</h1>
        <br></br>
        <br></br>
        <Form>
          <Form.Control className="small-input" placeholder="Enter your Name"></Form.Control>
          <br></br>
          <Form.Control className="small-input" type="email" placeholder="Enter a valid email address"></Form.Control>
          <br></br>
          <Form.Control className="small-input" as="textarea" rows={4} placeholder="Enter your message"></Form.Control>
        </Form>
        <br></br>
        <div align="left">
          <a href="#ok" class="ctn2">SUBMIT</a>
        </div>
      </Col>
    </Row>
    <br></br>
  </div>
  <div align="center" class="p-3 mb-2 bg-dark text-white">
    <p>Sample text. Click to select the text box. Click again or double</p>
    <p>click to start editing the text.</p>
  </div>
</div>

</>
);
}
export default ColorSchemesExample;
