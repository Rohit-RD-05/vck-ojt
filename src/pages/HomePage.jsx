import Header from "../components/Header/Header";

const HomePage = () =>{
    return(
        <div>
            <Header/>
            <img src="/Images/header-new.jpg" alt='vck2'/>
           
            
            <p><b>Vivekanand College</b> is a premier educational dedicated to fortering 
            <br/>academic excellence, innovation, and holistic development.
            <br/>Established in 1980, we have proudly served generations of students,
            <br/>empowering them to achieve their full potential.</p>
            <br/>
            <p>At Vivekanand College, we believe in a vibrant learning environment 
            <br/>that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, 
            <br/>and diverse student community create a unique ecosystem where curiosity thrives and 
            <br/>future leaders are shaped.

            <h2>Why Choose Vivekanand College?</h2>
            <hr/>
            <ul>
                <li><b>Legacy of Excellence:</b>Decades of commitment to quality education.</li>
                <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
                <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
                <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>
            </ul>
</p>
            <img src="Images\students-studying-DbLGuwF_.jpg" alt='VCK' width={900} height={300}/>    
            <img src="Images\campus-life-Crkero7B.jpg" alt="vck1" width={900} height={300}/>
            <p>Explore our vibrant campus and state-of-the-art facilities 
                designed to enhance your learning experience and personal growth.</p>
                  
                  <h4>Ready to explor our courses?</h4>
                  <a href="/courses">
                  <button style={{  backgroundColor:"green",color:"black",textAlign:"center"}}>Explore Courses</button>
                  </a>
        </div>
    )
}

export default HomePage;
