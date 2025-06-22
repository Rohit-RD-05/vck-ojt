import Header from "../components/Header/Header";

const CoursesPage = () =>{
    return(
        <div>
            <Header/>
            <h1>Our Academic Programs </h1>
          <p>Vivekanand college offers a comprehensive range of undergraduate and postgraduate
            <br/> programs designed to equip students with the knowledge and skills demanded by today's 
            <br/>dynamic global landscape. Our curriclum is regularly updated to reflect indistry tranda and academic advancements.
          </p>
          <h2><b>Discover Campus Life</b></h2>
          <video src="\Videoes\college-tour-FAmcnyfF.mp4" type="video1/mp4" style={{width:"600px",height:'300px'}} controls/>
          <h2>Undergraduate Programs (UG) </h2>
          <ul>
           <b> <li>Bachelor of Science(B.Sc)</li></b>
              <ul>
                <li>Computer Science (3 Years)</li>
                <li>Information Technology (3 Years)</li>
                <li>Biotechnology (3 Years)</li>
              </ul>
           <b> <li>Bachlor of Commerce (B.Com)</li></b>  
               <ul>
                <li>Accounting & Finance (3 Years)</li>
                <li>Banking & Insurance (3 Years)</li>
                </ul> 
           <b> <li>Bachelor of Arts (3 Years)</li></b>
               <ul>
                <li>English Literature (3 Years)</li>
                <li>Psychology (3 Years)</li>
                </ul>   
          </ul>

          <h2>Postgraduate Programs (PG)</h2>
            <ul>
              <li>Master of Science(M.Sc)</li>
                <ul>
                  <li>Computer Science(2 Years)</li>
                  <li>Information Technology(2 Years)</li>
                </ul>
               <li>Master Of Commerce(M.Com)(2 Years)</li>
               <li>Master of Arts(M.A.)(2 Years)</li> 
            </ul>
            <h2>Program Details & Free Structure(Annual)</h2>
            <table width="50%" border="1px">
              <tr>
                <th>Program Type</th>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Annual Fee</th>
                <th>Eligiblity</th>
              </tr>
              <tr>
                <th>UG</th>
                <th>B.C.S</th>
                <th>3 Years</th>
                <th>80,000 Rs.</th>
                <th>10+2 with PCM(50%)</th>
              </tr>
              <tr>
                <th>UG</th>
                <th>B.Com.Accounting&Finance</th>
                <th>3 Years</th>
                <th>75,000 Rs.</th>
                <th>10+2 commerce (50%)</th>
              </tr>
              <tr>
                <th>PG</th>
                <th>M.Sc.Information Technology</th>
                <th>2 Years</th>
                <th>85,000 Rs.</th>
                <th>B.Sc. IT/CS (50%)</th>
              </tr>

            </table>

            <h2> Specialized & Vocational Courses</h2>
            <p>In addition to traditional degree programs, we offer various certificate and 
              <br/>diploma courses in areas like Digital Marketing, Web Development, Data Analytics,
              <br/> and Soft Skills Development, providing specialized training for career enhancement.</p>

              <p>Have questions about a specific course?</p>
              <a href="Contact">
                <button style={{backgroundColor:'green'}}>Inquire about Courses</button>
              </a>
        </div>
    )
}
export default CoursesPage;