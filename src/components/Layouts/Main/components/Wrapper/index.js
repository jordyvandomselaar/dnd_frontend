import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  flex-direction: column;
  
  .opaque {
    visibility: hidden;
  }
`

export default Wrapper
