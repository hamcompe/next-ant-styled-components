import styled from 'styled-components'

const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : '#fff')};
  color: ${props => (props.primary ? '#fff' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default () =>
  <div>
    <Button>I am normal</Button>
    <Button primary>I am primary</Button>
  </div>
