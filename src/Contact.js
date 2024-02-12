import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9314838609516!2d85.0894506!3d25.60719290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5794ecb0cfe7%3A0x4952030c3acbfbf3!2sBrahmasthan%20Rd%2C%20Sheikhpura%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1702363029815!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{border:0}}
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form 
          className="contact-inputs" 
          action="https://formspree.io/f/xknldyle"
          
          method="POST">
            <input type="text" 
            placeholder="username" 
            name="username" 
            required autoComplete="off"
            />

            <input type="email" name="Email"
            placeholder="Email"
            autoComplete="off"
            />

            <textarea name="message"
            cols="30" 
            rows="10" 
            required autoComplete="off"
            placeholder="Enter your message"  ></textarea>

            <input type="submit" value="send"></input>
            
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact