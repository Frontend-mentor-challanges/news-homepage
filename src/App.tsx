import Home from "./components/Home"
import Navbar from "./components/Navbar"
import pic from "./assets/image-web-3-desktop.jpg"
import { blogs, newNews } from "./constants"

function App() {


  return (

    <div className="bg-off_white h-[100dvh] desktop:p-10 mobile:p-5 ">
      <Navbar />
      <div className="grid grid-cols-12 grid-rows-7 gap-4 py-10">
        <div className="desktop:col-span-8 mobile:col-span-12 row-span-3 ">
          <img src={pic} alt="" />
        </div>
        <div className="desktop:col-span-4 bg-very_dark_blue row-span-5 mobile:col-span-12 col-start-9 flex flex-col justify-between">
          <h1 className='text-orange_primary p-5 text-3xl font-inter font-medium'>New</h1>
          {newNews.map((news) => (
            <div key={news.id} className=' font-inter px-5 flex flex-col gap-3 mb-8'>
              <h5 className='font-semibold text-off_white'>{news.title}</h5>
              <p className='text-grayish_blue font-normal text-sm'>{news.description}</p>

              {news.hasBorder ? (<hr />) : null}
            </div>
          ))}
        </div>


        <div className="desktop:col-span-8 mobile:col-span-12 grid grid-cols-8">
          <div className="desktop:col-span-4 mobile:col-span-8 desktop:row-span-2 desktop:row-start-4">
            <p className='break-words text-7xl font-bold font-inter text-very_dark_blue'>
              The Bright  Future of <br /> Web 3.0?
            </p>
          </div>

          <div className="desktop:col-span-4 mobile:col-span-8 row-span-2 col-start-5 row-start-4 py-5 flex flex-col justify-between ">
            <p className='break-words text-dark_grayish_blue text-base mb-8 '>  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?
            </p>
            <div className='bg-red_primary cursor-pointer hover:bg-very_dark_blue duration-150 text-off_white w-fit px-5 py-2 uppercase tracking-widest text-sm'>
              Read more
            </div>
          </div>

        </div>



        <div className="col-span-12 desktop:grid desktop:grid-cols-9 mobile:flex mobile:flex-col mobile:gap-4">
          {blogs.map((blog) => (
            <div className="col-span-3 row-span-2 row-start-6 flex gap-3 ">
              <div className='flex justify-center'>
                <img src={blog.newsImg} alt="blog image" className='object-cover items-center' />
              </div>
              <div className='flex flex-col font-inter justify-evenly '>
                <h1 className='text-4xl text-grayish_blue font-bold'>0{blog.id}</h1>
                <p className='font-semibold text-very_dark_blue text-lg'>{blog.title}</p>
                <p className='text-dark_grayish_blue text-sm'>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>






      </div>
    </div>


  )
}

export default App
