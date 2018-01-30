import React, {Component} from 'react';


//styles
import './styles.css';
import styled from 'styled-components';


const Wrapper = styled.span`

`;

class MouseScroll extends Component {
  render() {
    return (
      <Wrapper  className="scroll-btn">
        <div>
					<span className="mouse">
						<span>
						</span>
					</span>
        </div>
      </Wrapper>
    )
  }
}

export default MouseScroll;
