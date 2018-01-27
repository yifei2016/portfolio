import React from 'react';
import {Wrapper,Link,Icon} from './styles';

const SocialIcon = ({
  icon: {href, icon}
}) => (
  <Wrapper>
  <Link href={href} target="_blank">
    <Icon  className={`fa fa-${icon}`} />
  </Link>
</Wrapper>
);

export default SocialIcon;

// class SocialIcon extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     return (
//       <Wrapper>
//         <Link href={href} target="_blank">
//           <Icon  className={`fa fa-${icon}`} />
//         </Link>
//       </Wrapper>
//     )
//   }
// }