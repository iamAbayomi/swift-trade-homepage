import DivisionBar from '../DivisionBar/DivisionBar'
import './CEOTestimonial.css'
function CEOTestimonial(){
    return(
        <div className="testimonial-section">
            <p className="testimonial-words">“Morbi sagittis ultricies ex, a tempus lorem suscipit non.
                    Donec semper leo ut lobortis condimentum. 
                    Orci varius natoque penatibus et magnis”
            </p>
            <DivisionBar barcolor={'#858585'}  />
            <p className="testimonial-author" >Ramon Ridwan. CEO Company</p>
        </div>
    )
}

export default CEOTestimonial