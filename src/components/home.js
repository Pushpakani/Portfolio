import '../App.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import imagecar from "../images/cartoon.png";
import Image from 'react-bootstrap/Image';


function Home() {

    return (
        <>

            <section class="row g-0 text-center align-items-center mb-5 min-vh-100" id='home'>
                <div class="col-sm-6 col-md-8 ">
                    <h3 className='text-center'>Hii,It's Me</h3>
                    <h1 className='fon'>PUSHPAKANI</h1>
                    <h1>Frontend Web Developer(ReactJS)</h1>
                    <a href="https://in.linkedin.com/in/pushpakani"><FaLinkedin className="me-3" /></a>
                    <FaGithub className="me-3" />

                </div >
                <div class="col-sm-6 col-md-4">
                    <Image src={imagecar} alt="image" className='img-fluid' ></Image>
                </div>
            </section>

        </>
    )

}
export default Home;
