import Image from 'next/image'

interface ButtonProps {
  type: 'button' | 'submit'
  title: string
  icon?: string
  variant: 'btn_dark_green' | 'btn_green' | 'btn_white_text' | 'btn_white'
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button
