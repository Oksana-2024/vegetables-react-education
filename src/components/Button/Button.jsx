import css from "./Button.module.css"
const Button = ({nameButton,link}) => {
    return (
        <div>
             <button className={css.button} type="button">
              <a href={`#${link}`}> #{nameButton}</a>
            </button>
        </div>
    )
}
export default Button