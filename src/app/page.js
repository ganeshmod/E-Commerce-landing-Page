'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



// import  englishImage from "../app"
// import logo from "../../public/englishimages.svg"
// import Image from 'next/image';
// import englishImage from '../../public/englishimages.svg'


export default function Home() {


  
  return (
    <main>
      <header className='container-fluid'>
        <div className='row topHeader'>
          <div className='container'>
            <div className='row'>
              <div className='col-6'>

              </div>
              <div className='col-6'>

              </div>
            </div>
          </div>
        </div>

        <div className='row bottomHeader'>
            <div className='container'>
              <div className='row'>

              </div>

              <div className='row'>
                
                </div>
            </div>
        </div>
      </header>
      {/* <img src="/sample.jpeg" alt='image' /> */}
      <div className="container-fluid">
        <div className="container bg-white mb-3">
          <div className="row left-move" style={{ backgroundColor: "whitesmoke", height: 20 }}>
            
          
            <div className="col-lg-9 col-md-12 col-sm-12 p-2  text-center align-items-center  text-sm-start  ">
              <h6 className="text-muted" style={{ fontSize: 14, padding: 2 }}>
                Super Value Deals - Save more with Coupons
              </h6>
            </div>

        
            <div className="col-lg-3 d-none d-lg-block">
              <div className="r-2 p-2 text-end py-1" style={{ float: "end" }}>
                <img src="./englishimages.svg" style={{ marginRight: 4, width: 16, height: 13 }} alt="image" />
                <span className="english text-muted">English</span>
                <span>
                  <i className="bi bi-chevron-down text-muted" style={{ fontSize: "11px", marginLeft: 3 }}></i>
                </span>
              </div>
            </div>
            
          </div>
        </div>


        <div/>
          
         <div className='row ' style={{backgroundColor:'white'}}>
          <div className='col-3 mt-3 text-center qr-block'>
            <img  className="frescart "src='https://freshcart-next-js.vercel.app/images/logo/freshcart-logo.svg' alt='frescart'/>
         

          </div>
          <div className="col-5 d-flex align-items-center gap-2 mt-4 " style={{width:500}}>
           <div className="input-group d-none d-lg-flex">
  <input type="text" className="form-control" placeholder="Search for product" />
  <span className="input-group-text">
    <i className="bi bi-search"></i>
  </span>
</div>

<button type="button" className="btn btn-outline-secondary d-none d-lg-flex">
  <i className="bi bi-geo-alt"></i> Location
</button>


          </div>


          <div className='col text-end shape collectionofHeart ' >

          <div className="position-relative d-inline-block " >
           <a href='#'><i className="bi bi-heart text-secondary " style={{ fontSize: '1.2rem',fontWeight:500 }}></i></a>
              <span className="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-success" style={{ fontSize: '0.6rem' }}>
                5+
              </span>
          </div>
          <a href='#'><i className="bi bi-person text-secondary mx-3" style={{ fontSize:'1.5rem', color: 'black', fontWeight:500 }}></i></a>
          <div className="position-relative d-inline-block" >
     
          <a href='#'> <i className="bi bi-bag text-secondary " style={{ fontSize:'1.2rem', fontWeight:500,textShadow:10 }}></i></a>
             <span 
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{ fontSize: '0.6rem' }}>
           3+
           </span>
        </div>
        </div>
     <div className='row'>
      <div className='col-3 mt-2  mt-2 qr-block '>
      <button type="button" className="btn btn-success text-center ALLDEPART   mt-2 p-2 mx-2 " style={{ backgroundColor:'#0aad0a', width:170}} >
        <span><i className="bi bi-qr-code mx-2" style={{ fontSize:'1rem', color: 'white' }}></i>
        </span>All Departments</button>
      </div>



      <div className="">
  <nav className="navbar navbar-expand-lg navbar-light  d-flex align-items-center">
    


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="mainNavbar">
      <ul className="navbar-nav mx-auto ulmargin"  >
        {[
          { name: "Home", dropdown: ["Home Default", "Home Modern", "Home Creative", "Home Local Store", "Home Minimalist"] },
          { name: "Shop", dropdown: ["Shop Grid-Filter", "Shop Grid-3 column", "Shop List-Filter", "Shop-Filter", "Shop Wide", "Shop Single", "Shop Single v2", "Shop Wishlist", "Shop Cart", "Shop Checkout"] },
          { name: "Stores", dropdown: ["Store List", "Store Grid", "Store Single"] },  
          { name: "Mega menu", dropdown: [
          <div className='offcanvas offcanvas-bottom' tabIndex='-1' id='sidebar' aria-labelledby='sidebar-label'>
            <h5>hello</h5>
            <button type='button' className='btn-close ' data-bs-dismiss='offcanvas' aria-label='close'>

            </button>
            <div className='offcanvas-body'>
              kjhfdnskwdhbnxmsjhdbcnxmsj
        
            </div>
           </div>       


          ] },  
          { name: "Pages", dropdown: ["Blog", "Blog Single", "Blog Category", "About us", "404 Error", "Contact"] },
          { name: "Account", dropdown: ["Sign in", "Sign up", "Forget Password", "My Account"] }, 
          { name: "Dashboard", dropdown: [] },
          { name: "Docs", dropdown: [] },  
        ].map((item, index) => (
          <li className="nav-item dropdown position-relative" key={index}>
            <a className="nav-link" href="#" role="button">
              {item.name}
              {item.dropdown.length > 0 && (
                <i className="bi bi-chevron-down text-muted ms-1" style={{ fontSize: "11px" }}></i>
              )}
            </a>

           
            {item.dropdown.length > 0 && (
              <ul className="dropdown-menu">
                {item.dropdown.map((option, subIndex) => (
                  <li key={subIndex}>
                    <a className="dropdown-item" href="#">{option}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  </nav>
</div>



  </div>
  </div > 
  </div>



 
 <hr className="my-2  border-secondary" />
     {/* <----carousel------> */}

 <div className="container mt-3  w-100 " >
  <div id="carouselExample" className="carousel slide " >
    <div className="carousel-inner" >
      <div className="carousel-item active" data-bs-interval='2000'>
        <img
          src="./carosel.jpeg"
          className="d-block w-100 rounded img-fluid "
          alt="Delicious Food"
          
          style={{ objectFit: "cover", height: "500px",  }}
        />
        <div className='carousel-caption' style={{position:"absolute", top:"80px", left:"-10px", width:"700px", height:"200px"}} >
  
        <span className='bg-warning rounded-pill px-3 h-2 ' style={{ position:'absolute ',color:'black' ,left:"72px", fontSize:"12px",fontWeight:"bolder"}}>Opening Sale Discount 50%</span>
        <h1 className='text-dark text-sm-start text-md-start display-5 fw-bold mt-4 text-wrap' style={{textAlign:"start", paddingLeft:"70px"}}> SuperMarket For   Fresh  Grocery</h1>
        <h3 className='text-muted  text-wrap' style={{textAlign:"start", paddingLeft:"75px", fontSize:"16px"}}>Introduced a new model for online grocery shopping and <br/>convenient home delivery </h3>
        <button type='botton' className='btn btn-dark mt-3 ' style={{ position:"absolute" ,padding:"5px", left:"72px"}} >Shop Now →</button>
        </div>
        



        
      </div>

    
      <div className="carousel-item" data-bs-interval='2000'>
        <img
          src="./carosel-2.jpeg"
          className="d-block w-100 rounded img-fluid"
          alt="Food Item"
          style={{ objectFit: "cover", height: "500px" }}
        />
          <div className='carousel-caption' style={{position:"absolute", top:"80px", left:"-10px", width:"700px", height:"200px"}} >
  
  <span className='bg-warning rounded-pill px-3 h-2 ' style={{ position:'absolute ',color:'black' ,left:"72px", fontSize:"12px",fontWeight:"bolder"}}>Opening Sale Discount 50%</span>
  <h1 className='text-dark display-5 fw-bold mt-4' style={{textAlign:"start", paddingLeft:"70px"}}> Free Shipping on Orders  over <span style={{color:'#0aad0a'}}>$100</span></h1>
  <h3 className='text-muted ' style={{textAlign:"start", paddingLeft:"75px", fontSize:"16px"}}>Free Shipping to First-Time Customers Only ,After pomotions  <br/>and discounts are apllied  </h3>
  <button type='botton' className='btn btn-dark mt-3 ' style={{ position:"absolute" ,padding:"5px", left:"72px"}} >Shop Now →</button>
  </div>

      </div>

   
      <div className="carousel-item" data-bs-interval='2000'>
        <img
          src="https://images.unsplash.com/photo-1546195643-70f48f9c5b87?w=1920&q=80"
          className="d-block w-100 rounded img-fluid"
          alt="Food Item"
          style={{ objectFit: "cover", height: "500px" }}
        />
        <div className='carousel-caption text-black'>
        <h2>Third Image </h2>
        <p>The Food is being prepared</p>
        </div>

      </div>
    </div>

    
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</div>

         {/* <----featured Categories--> */}
         <div className="container mt-2">
         <h2 className='mt-3' style={{ fontSize: 25 }}>Featured Categories</h2>
  <div className="row mt-4 g-3 row-cols-2 row-cols-md-2 row-cols-lg-4">
  

    <div className="col">
      <div className="card d-flex justify-content-center align-items-center p-4 featured-Categories">
        <img src="./cleaning.jpeg" alt="loading" style={{ objectFit: "cover", width: 100, height: 120 }} />
        <div className="card-body bg-white">
          <h6 className="text-muted">Cleaning</h6>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card d-flex justify-content-center align-items-center featured-Categories p-4">
        <img src="https://freshcart-next-js.vercel.app/images/category/category-snack-munchies.jpg" alt="loading"
          style={{ objectFit: "cover", width: 100, height: 120, borderRadius: 3 }} />
        <div className="card-body bg-white">
          <h6 className="text-muted">Snack & Munchies</h6>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card d-flex justify-content-center align-items-center featured-Categories p-4">
        <img src="https://freshcart-next-js.vercel.app/images/category/category-bakery-biscuits.jpg" alt="loading"
          style={{ objectFit: "cover", width: 100, height: 120, borderRadius: 4 }} />
        <div className="card-body bg-white">
          <h6 className="text-muted">Bakery & Biscuits</h6>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card d-flex justify-content-center align-items-center featured-Categories p-4">
        <img src="https://freshcart-next-js.vercel.app/images/category/category-atta-rice-dal.jpg" alt="loading"
          style={{ objectFit: "cover", width: 100, height: 120 }} />
        <div className="card-body bg-white">
          <h6 className="text-muted">Atta-Rice-Dal</h6>
        </div>
      </div>
    </div>

  </div>
</div>

  {/* <---- normal card---> */}
 <div className="container mt-4">
  <div className="row p-2 position-relative row-cols-1 row-cols-md-1 row-cols-lg-2 g-3">
    
 
    <div className="col position-relative">
      <img 
        src="https://freshcart-next-js.vercel.app/images/banner/grocery-banner.png"
         
        
        alt="Baked"
        style={{ objectFit: 'cover', width: '100%', height: '220px', borderRadius: '4px' }}
      />
      <div className="position-absolute top-0 start-0 mt-5 mx-5 text-center text-shadow">
        <h4 className='text-start'>Fruit & vegitables</h4>
        <h5 className="text-muted text-start">Get Up to 30% Off</h5>
        <div className="text-start">
          <button className="btn btn-dark mt-2">Shop Now </button>
            </div>
      </div>
    </div>

  
    <div className="col position-relative">
      <img 
        src="https://freshcart-next-js.vercel.app/images/banner/grocery-banner-2.jpg
" 
        alt="Fruits & Vegetables"
        style={{ objectFit: 'cover', width: '100%', height: '220px', borderRadius: '4px' }}
      />
      <div className="position-absolute top-0 start-0 mt-5 mx-5 text-center">
        <h3  className='text-start'>Cake & Pastry</h3>
        <h5 className="text-muted text-start">Get Up to 30% Off</h5>
        <div className="text-start">
          <button className="btn btn-dark mt-2">Shop Now </button>
            </div>
      </div>
    </div>

  </div>
</div>
{/* <----popular product--> */}

<div class="container mt-4 ">
  <h2>
  Popular products 
  </h2>

 
  <div className="row mt-3 row-cols-2 row-cols-md-2 row-cols-lg-5 g-3">
  {[
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-1.jpg", title: "Snack & Munchies",Nameofproduct:"Haldiram's Sev Bhujia" },
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-2.jpg", title: "Bakery & Biscuits",Nameofproduct:"NutriChoice Digestive" },
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-3.jpg", title: "Bakery & Biscuits",Nameofproduct:"Cadbury 5 Star" },
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-4.jpg", title: "Snack & Munchies",Nameofproduct:"Onion Flavour Potato" },
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-5.jpg", title: "Instant Food" ,Nameofproduct:"Salted Instant Popcorn"},
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-6.jpg", title: "Snack & Munchies",Nameofproduct:"Haldiram's Sev Bhujia" },
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-7.jpg", title: "Bakery & Biscuits",Nameofproduct:"NutriChoice Digestive" },
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-8.jpg", title: "Bakery & Biscuits",Nameofproduct:"Cadbury 5 Star" },
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-9.jpg", title: "Snack & Munchies",Nameofproduct:"Onion Flavour Potato" },
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-10.jpg", title: "Instant Food" ,Nameofproduct:"Salted Instant Popcorn"},
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-11.jpg", title: "Snack & Munchies",Nameofproduct:"Haldiram's Sev Bhujia" },
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-12.jpg", title: "Bakery & Biscuits",Nameofproduct:"NutriChoice Digestive" },
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-13.jpg", title: "Bakery & Biscuits",Nameofproduct:"Cadbury 5 Star" },
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-14.jpg", title: "Snack & Munchies",Nameofproduct:"Onion Flavour Potato" },
    { imgSrc: "https://freshcart-next-js.vercel.app/images/products/product-img-15.jpg", title: "Instant Food" ,Nameofproduct:"Salted Instant Popcorn"},
  ]
  
  
  .map((item, index ) => (
    <div className="custom-col" key={index}>
      <div className="card card-hvr bg-white">
        <img src={item.imgSrc} alt="loading" className="card-img-top" />
        <div className="card-body">
          <h6 className="text-muted">{item.title}</h6>
          <h6 className="card-title Nameofproduct" 
           
          
          >{item.Nameofproduct}</h6>
          <p className="card-text">⭐⭐⭐⭐ <span className="text-muted"> 4.3(4)</span></p>
          <div className="ftr">
            <p>$21.6 <span className="dollar text-muted">$24</span></p>
            <button type="button" className="btn btn-success">+ADD</button>
          </div>
        </div>
      </div>
    </div>
  ))}


  </div>
 
 

</div>

{/* <--Daily best Sells--> */}
<div className='container mt-4'>
  <h2>
    Daily Best Sells 
  </h2>
  <div className='row mt-4  row-cols-1 row-cols-md-1 row-cols-lg-4 g-2 '>
   <div className='col card-margin  '>
    <div className='card position-relative h-auto  '>
      <img src='https://freshcart-next-js.vercel.app/images/banner/banner-deal.jpg' alt='loading' style={{
        objectFit:'cover',borderRadius:4 ,height:500
      }}/>
      <div className='position-absolute text-white m-3'>
      <h2 >100% Organic Coffee Beans.</h2> 
      <h6 >Get the best deal before <br/>close.</h6>
      <button type="button" style={{borderRadius:3,color:'white'}} className='btn btn-success'>Shop Now →</button>
      </div>

    </div>
    </div>
    
    <div className='col  rounded '>
      <div className='card card-hvr'>
      <img src='https://freshcart-next-js.vercel.app/images/products/product-img-11.jpg' alt='coffee-packet-image' 
      className="card-img-top "/>
     <div className='card-body '>
      <h6 className='text-muted text-secondary'>Tea,Coffee & Drinks</h6>
      <h5>Roast Ground Coffee</h5>
      <div className='d-flex justify-content-between align-content-center'>
      <h6 className='mt-1'>$13.5 <span className='dollar text-muted'>$18</span></h6>
      <p className='mb-1'>⭐⭐⭐⭐<span className='text-muted text-secondary'>4.3</span></p> 
      </div>
      <button type='button' className=' btn btn-success text-center w-100 '>+ add to Cart</button>
      
     
     <div className='row justify-content-center mtb-15child row-cols-sm-4 row-cols-md-4 row-cols-lg-3'>
      <div className='col'>
      <button type="button" className=" btn btn-outline-secondary pr-2  text-black ">1325<br/><h6 className='text-muted'>Days</h6></button>
      </div>
      <div className='col'>
      <button type="button" className=" btn btn-outline-secondary pr-2  text-black ">10<br/><h6 className='text-muted'>Hours</h6></button>
      </div>
      <div className='col'>
      <button type="button" className=" btn btn-outline-secondary pr-2  text-black ">19<br/><h6 className='text-muted'>Mins</h6></button>
      </div>
      
      <div className='col '>
      <button type="button" className=" btn btn-outline-secondary pr-2 px-3   mx-1 text-black ">14<br/><h6 className='text-muted'>Sec</h6></button>
      </div>
      
      </div>
      </div>

    </div>
    </div>
    
    <div className='col rounded '>
      <div className='card card-hvr'>
      <img src='https://freshcart-next-js.vercel.app/images/products/product-img-12.jpg' alt='coffee-packet-image' 
      className="card-img-top "/>
     <div className='card-body '>
      <h6 className='text-muted text-secondary'>Tea,Coffee & Drinks</h6>
      <h5>Roast Ground Coffee</h5>
      <div className='d-flex justify-content-between align-content-center'>
      <h6 className='mt-1'>$13.5 <span className='dollar text-muted'>$18</span></h6>
      <p className='mb-1'>⭐⭐⭐⭐<span className='text-muted text-secondary'>4.3</span></p> 
      </div>
      <button type='button' className='btn btn-success text-center w-100 '>+ add to Cart</button>
      <div className='row justify-content-center mtb-15child row-cols-sm-4 row-cols-md-4 row-cols-lg-3 g-1'>
      <div className='col'>
      <button type="button" className=" btn btn-outline-secondary pr-2  text-black m-0">1325<br/><h6 className='text-muted'>Days</h6></button>
      </div>
      <div className='col'>
      <button type="button" className=" btn btn-outline-secondary pr-2  text-black m-0">10<br/><h6 className='text-muted'>Hours</h6></button>
      </div>
      <div className='col'>
      <button type="button" className=" btn btn-outline-secondary pr-2 text-black m-0">19<br/><h6 className='text-muted'>Mins</h6></button>
      </div>
      
      <div className='col '>
      <button type="button" className=" btn btn-outline-secondary pr-3 px-3   mx-1  text-black m-0">14<br/><h6 className='text-muted'>Sec</h6></button>
      </div>
      
      </div>
      </div> 
    </div>
    </div>
    
    <div className='col  rounded '>
      <div className='card card-hvr'>
      <img src='https://freshcart-next-js.vercel.app/images/products/product-img-13.jpg' alt='coffee-packet-image' 
      className="card-img-top"/>
     <div className='card-body'>
      <h6 className='text-muted text-secondary'>Tea,Coffee & Drinks</h6>
      <h5>Roast Ground Coffee</h5>
      <div className='d-flex justify-content-between align-content-center'>
      <h6 className='mt-1'>$13.5 <span className='dollar text-muted'>$18</span></h6>
      <p className='mb-1'>⭐⭐⭐⭐<span className='text-muted text-secondary'>4.3</span></p> 
      </div>
      <button type='button' className='btn btn-success text-center w-100 '>+ add to Cart</button>
      <div className='row justify-content-center mtb-15child row-cols-sm-4 row-cols-md-4 row-cols-lg-3 g-1'>
      <div className='col'>
      <button type="button" className=" btn btn-outline-secondary pr-2  text-black m-0">1325<br/><h6 className='text-muted'>Days</h6></button>
      </div>
      <div className='col'>
      <button type="button" className=" btn btn-outline-secondary pr-2  text-black m-0">10<br/><h6 className='text-muted'>Hours</h6></button>
      </div>
      <div className='col'>
      <button type="button" className=" btn btn-outline-secondary pr-2  text-black m-0">19<br/><h6 className='text-muted'>Mins</h6></button>
      </div>
      
      <div className='col '>
      <button type="button" className=" btn btn-outline-secondary px-3   mx-1  pr-3text-black m-0">14<br/><h6 className='text-muted'>Sec</h6></button>
      </div>
      
      </div>
      </div>
    </div>
    </div>

    
  
</div>
</div>

<div className='container mt-5'>
  <div className='row p-3 m-2 row-cols-1 row-cols-md-1 row-cols-lg-4 g-1 '>
    <div className='col p-3 '>
      
    <img className='clock-img' src='https://cdn-icons-png.freepik.com/512/11134/11134231.png' alt='clock-loading'/>
    <h3 style={{fontSize:22,marginTop:5,marginBottom:4}}>10 minute grocery now</h3>
     <p className='text-muted'>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
    
    </div>
    <div className='col p-3'>
    <img className='clock-img' src='https://img.icons8.com/ios7/512/40C057/gift--v2.png' alt='clock-loading'/>
    <h3 style={{fontSize:22,marginTop:5,marginBottom:4}}>Best Prices & Offers</h3>
     <p className='text-muted'>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
    
    

    </div>
    <div className='col  p-3'>
    <img className='clock-img' src='https://static.vecteezy.com/system/resources/previews/024/194/168/non_2x/cube-icon-in-green-and-white-color-vector.jpg' alt='clock-loading'/>
    <h3 style={{fontSize:22,marginTop:5,marginBottom:4}}>Wide Assortment</h3>
     <p className='text-muted'>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories..</p>
    
    </div>
    <div className='col p-3'>
    <img className='clock-img' src='https://img.icons8.com/ios_filled/512/40C057/restart.png' alt='clock-loading'/>
    <h3 style={{fontSize:22,marginTop:5,marginBottom:4}}>Easy Returns</h3>
     <p className='text-muted'>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .</p>
    

    </div>

  </div>

</div>

<footer>


 <div className="container-fluid mt-2">
      <div className="container mt-4">
       
        <div className=" row desktop-layout d-flex justify-content-between mt-3 row-cols-2 row-cols-md-2 row-cols-lg-6">
          <div className="col mt-4">
            <h5 style={{ fontSize: 18 }}>Categories</h5>
            <h5 className="text-muted">Vegetables & Fruits</h5>
            <h5 className="text-muted">Breakfast & Instant Food</h5>
            <h5 className="text-muted">Bakery & Biscuits</h5>
            <h5 className="text-muted">Atta, Rice & Dal</h5>
            <h5 className="text-muted">Sauces & Spreads</h5>
            <h5 className="text-muted">Organic & Gourmet</h5>
            <h5 className="text-muted">Baby Care</h5>
            <h5 className="text-muted">Cleaning Essentials</h5>
            <h5 className="text-muted">Personal Care</h5>
          </div>

          <div className="col mt-5">
            <h5 className="text-muted">Dairy, Bread & Eggs</h5>
            <h5 className="text-muted">Cold Drinks & Juices</h5>
            <h5 className="text-muted">Tea, Coffee & Drinks</h5>
            <h5 className="text-muted">Masala, Oil & More</h5>
            <h5 className="text-muted">Chicken, Meat & Fish</h5>
            <h5 className="text-muted">Paan Corner</h5>
            <h5 className="text-muted">Pharma & Wellness</h5>
            <h5 className="text-muted">Home & Office</h5>
            <h5 className="text-muted">Pet Care</h5>
          </div>

          <div className="col mt-4">
            <h5 style={{ fontSize: 18 }}>Get to Know Us</h5>
            <h6 className="text-muted">Company</h6>
            <h6 className="text-muted">About</h6>
            <h6 className="text-muted">Blog</h6>
            <h6 className="text-muted">Help Center</h6>
            <h6 className="text-muted">Our Value</h6>
          </div>

          <div className="col mt-4">
            <h5 style={{ fontSize: 18 }}>For Consumers</h5>
            <h6 className="text-muted">Payments</h6>
            <h6 className="text-muted">Shipping</h6>
            <h6 className="text-muted">Product Returns</h6>
            <h6 className="text-muted">FAQ</h6>
            <h6 className="text-muted">Shop Checkout</h6>
          </div>

          <div className="col mt-4">
            <h5 style={{ fontSize: 18 }}>Become a Shopper</h5>
            <h6 className="text-muted">Shopper Opportunities</h6>
            <h6 className="text-muted">Become a Shopper</h6>
            <h6 className="text-muted">Earnings</h6>
            <h6 className="text-muted">Ideas & Guides</h6>
            <h6 className="text-muted">New Retailers</h6>
          </div>

          <div className="col mt-4">
            <h5 style={{ fontSize: 18 }}>FreshCart Programs</h5>
            <h6 className="text-muted">Gift Cards</h6>
            <h6 className="text-muted">Promos & Coupons</h6>
            <h6 className="text-muted">FreshCart Ads</h6>
            <h6 className="text-muted">Careers</h6>
          </div>
        </div>

       
       
      </div>
       


  <hr/>
  <div className="container mt-2">
      <div className="row p-2 row-cols-1 row-cols-md-1 row-cols-lg-2 align-items-center">
       
        <div className="col text-center">
          <p className="payment-partners mb-2">Payment Partners</p>
          <div>
            <img
              className="payment-gateway px-1"
              src="https://freshcart-next-js.vercel.app/images/payment/amazonpay.svg"
              alt="Amazon Pay"
            />
            <img
              className="payment-gateway px-1"
              src="https://freshcart-next-js.vercel.app/images/payment/american-express.svg"
              alt="American Express"
            />
            <img
              className="payment-gateway px-1"
              src="https://freshcart-next-js.vercel.app/images/payment/mastercard.svg"
              alt="MasterCard"
            />
            <img
              className="payment-gateway px-1"
              src="https://freshcart-next-js.vercel.app/images/payment/paypal.svg"
              alt="PayPal"
            />
            <img
              className="payment-gateway px-1"
              src="https://freshcart-next-js.vercel.app/images/payment/visa.svg"
              alt="Visa"
            />
          </div>
        </div>

       
        <div className="col text-center">
          <p className="mb-2">Get deliveries with FreshCart</p>
          <div>
            <img
              className="payment-gateway-2 px-1"
              src="https://freshcart-next-js.vercel.app/images/appbutton/appstore-btn.svg"
              alt="App Store"
            />
            <img
              className="payment-gateway-2 px-1"
              src="https://freshcart-next-js.vercel.app/images/appbutton/googleplay-btn.svg"
              alt="Google Play"
            />
          </div>
        </div>
      </div>

      <hr />

    
      <div className="container mt-1">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <p className="footer-text">
              © 2022 - 2025 FreshCart eCommerce HTML Template. All rights
              reserved. Powered by
              <br/>
              <span className="text-success">Codescandy.</span>
            </p>
          </div>

          
          <div className="col-lg-5 col-md-12 d-flex justify-content-lg-end justify-content-center align-items-center text-sm-start ">
            <p className="footer-text me-2">Follow us on</p>
            <a href="#">
              <img
                className="social-media-icon"
                src="./facebookicon.png.png"
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img
                className="social-media-icon"
                src="https://www.iconpacks.net/icons/1/free-twitter-icon-99-thumb.png"
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img
                className="social-media-icon"
                src="https://www.svgrepo.com/show/447167/instagram-outline.svg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
   

  </div>
</footer>


<button type="button" className="btn btn-dark text-center p-2 mx-2 float-end  position-sticky"
  style={{ 
    position: 'fixed', 
    bottom: '20px', 
    right: '20px',    
    marginBottom: '10px' 
  }} >
        <span><i className="bi bi-cart mx-2" style={{ fontSize: '1rem', color: 'white' }}></i>
        </span>Buy Now</button>





 </main>
  );
}




