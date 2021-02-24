import HeaderBar from './HeaderBar'

let message = 'Free shipping on orders over $40';
let link = '/promo';

interface IHeader {

}

export default function Header(props: IHeader) {
  return (
    <header>
      <HeaderBar message={ message } link={ link }/>
    </header>
  )
}