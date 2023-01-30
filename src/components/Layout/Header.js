import * as React from "react"
import heroBg from "../../assets/img/herobg.jpg"
import logo from "../../assets/img/logo.png"
import MKT from "../../images/icon.png"
import { Link } from 'react-scroll'

export default function HeaderSection() {

  const menuItem = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'aboutUs' },
    {
      label: 'History',
      id: 'history',
    },
    { label: 'Contact Us', id: 'contact' },
  ]

  return <div className="" style={styles.wrapper}>
    <div style={styles.container}>
      <div className="w-full flex justify-between items-center px-12">
        <div>
          <img className="h-24" src={logo} />
        </div>
        <div className="header-center">
          <div>
            <ul className="flex">
              {menuItem.map(item => {
                return <li className="mx-8">
                  <Link
                    href={item ? item.id : null}
                    to={item.id}
                    smooth={true}
                    className="hover:text-lava-yellow-200 cursor-pointer font-sans text-xl text-gray-200"
                    style={{ fontFamily: 'Montserrat Alternates' }}
                  >
                    {item.label}
                  </Link>
                </li>
              })}
            </ul>
          </div>
        </div>

        <div>
          <img src={MKT} width="70px" />
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="flex justify-center items-center lg:pt-28 lg:pb-64">
        <div className="flex flex-col justify-center items-center">
          <div style={styles.heroText}>MKT</div>
          <div>
            <p className="text-white text-center" style={{ fontFamily: "Montserrat Alternates" }}>Chào mừng bạn đến với quốc đảo<strong> Máu Kinh tế.</strong> <br />Nếu đây là lần đầu tiên bạn tới thì hãy cùng chúng mình khám phá nào!</p>
          </div>

          <div className="bg-white px-8 py-4 mt-16 rounded-sm cursor-pointer">
            <span>
              <strong>Géc goooo!!! {'>>'}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const styles = {
  wrapper: {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
  },
  container: {
    background: 'rgba(0, 0, 0, 0.6)'
  },
  heroText: {
    color: 'white',
    fontFamily: 'Passero One',
    fontSize: '220px'
  }
}
