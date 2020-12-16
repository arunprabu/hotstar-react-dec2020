// hoc - Higher Order Component
// wrapping component that returns the props children
// can return multiple children tags also
// hoc doesnt usually render any JSX on its own
// naming convention -- begin with 'With' prefix in its' filename

const WithLastLogin = (props) => props.children;

export default WithLastLogin;