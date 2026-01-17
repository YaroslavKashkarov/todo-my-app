import styles from './Button.module.css'
// @ts-ignore
function Button(props) {
  const {children, disabled = false} = props
  return (
    <button {...props} className={styles.button} disabled={disabled}>{children}</button>
  )
}

export default Button