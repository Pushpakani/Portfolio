import React from "react";

function Contact() {

    const alerting = () => {
        alert("mail sended")
    }

    return (
        <>
            <section id="contact" class="py-5 bg-light ">
                <div class="container pt-5">
                    <h2 class="text-center mb-5">Contact Me</h2>
                    <div class="row mb-5 text-center">
                        <div class="col-md-4 mb-4">
                            <div class="contact-info">
                                <i class="fas fa-envelope fa-3x text-primary mb-3"></i>
                                <h5>Email</h5>
                                <a href='mailto:pushpakani597321@gmail.com'>pushpakani597321@gmail.com</a>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="contact-info">
                                <i class="fas fa-phone-alt fa-3x text-primary mb-3"></i>
                                <h5>Phone</h5>
                                <p>(+91)8072000468</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="contact-info">
                                <i class="fas fa-map-marker-alt fa-3x text-primary mb-3"></i>
                                <h5>Location</h5>
                                <a href="https://maps.app.goo.gl/PRotwZ6PCbL3TpR48">Tiruppur, India</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 mx-auto">
                            <form>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Your Email" required />
                                </div>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea class="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary w-100" onClick={alerting}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Contact;