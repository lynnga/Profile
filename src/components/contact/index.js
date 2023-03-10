function Contact() {
    return (
        <>
            <div className="contact-page">
                <h3> Contact </h3>
                <hr style={{margin: "20px 300px"}}/>
                <form style={{color: "black"}} action="mailto:lingamliel@gmail.com" method="post" enctype="text/plain">
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Last Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Email</label>
                        </div>
                        <div class="col-75">
                            <input type="email" id="lname" name="lastname" placeholder="Your last name.."/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Subject</label>
                        </div>
                        <div class="col-75">
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                        </div>
                    </div>
                    <br/>
                        <div class="row">
                            <input type="submit" value="Submit" style={{color: "black", backgroundColor: "whitesmoke", padding: "4px 10px"}}/>
                        </div>
                </form>
            </div>
        </>
    )
}

export default Contact;