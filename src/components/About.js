import React, {useEffect} from "react";

export default function About(props) {
  useEffect(() => {
    const handleMouseDown = (e) => {
      e.preventDefault();
      document.querySelector(".subscription").classList.add("done");
    };

    const submitEmailButton = document.querySelector(".submit-email");
    submitEmailButton.addEventListener("mousedown", handleMouseDown);

    return () => {
      submitEmailButton.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <>
    <div className={`container ${props.mode}`}>
      <div className="about">
      <h2 className="my-3">About Us</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Features & Functionalities
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Welcome to TextUtils</strong> Our features provides quick and efficient text manipulation. Capitalize, lowercase, remove contact info, and eliminate extra spaces effortlessly. Enhance your text in just a few clicks.Use
              <code>TextUtils</code>,
              to work with ur text efficiently.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Browser Compatibility
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>TextUtils works in any web-browser.</strong> It ensures browser compatibility, allowing users to capitalize, lowercase, remove contact information, and eliminate extra spaces in their text. Enjoy these helpful functionalities seamlessly across various browsers for a smooth and reliable experiencet
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             Free to Use
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>TextUtils is a completely free online tool,</strong>  available for everyone to access and utilize. Enjoy all the powerful text editing features and functionalities without any cost or limitations. Enhance your text effortlessly with TextUtils, without worrying about subscription fees or hidden charges.
            </div>
          </div>
        </div>
      </div>

      </div>

     
    </div>

<div className="newsletter">

<div class="image">
        <i class="fas fa-envelope"></i>
      </div>
      <div className="texts">
        <h3>Let's keep in touch</h3>
        
      </div>

<div class="content">
  
<form class="subscription">
<input class="add-email" type="email" placeholder="subscribe@me.now"/>
<button class="submit-email" type="button">
  <span class="before-submit">Subscribe</span>
  <span class="after-submit">Thank you for subscribing!</span>
 </button>

 
</form>


</div>

<div class="notice">
		<input type="checkbox"/>
		<span class="notice__copy">I agree to my email address being stored and uses to recieve monthly newsletter.</span>
	</div>
  

</div>

</>
  );
}