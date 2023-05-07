import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
// import Logo from '@/images/leela-logo.png'
import { NavLinks } from '@/components/NavLinks'
import Image from 'next/image'
import { Logomark, Logo } from './Logo'

function MenuIcon(props) {
  return (
    // <div className="relative h-20 w-20">
    <a
      data-testid="linkElement"
      data-popupid="ykhf8"
      target="_self"
      role="button"
      className="-ml-14  "
      tabindex="0"
    >
      <div className="relative w-24 ">
        <svg
          className="relative mt-2"
          preserveAspectRatio="xMidYMid meet"
          data-bbox="25.002 54.934 150 90.135"
          // viewBox="25.002 54.934 150 90.135"
          viewBox="25.002 64.934 380 200.135"
          // viewBox="24 24 24 24"
          height="67"
          width="162"
          // height="200"
          // width="200"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
          role="presentation"
          aria-hidden="true"
          aria-labelledby="svgcid-poigin549a60"
        >
          <title id="svgcid-poigin549a60"></title>
          <g>
            <path d="M129.325 132.141l.763-.88c1.79.072 3.689.246 5.581.186 1.086-.034 2.121.025 3.163.28a.93.93 0 00.546-.026c.623-.264 1.147-.038 1.678.259.746.417 1.5.804 2.408.494.158-.054.364.024.546.054 1.367.223 2.727.524 4.103.651 1.11.102 2.239-.006 3.505-.022.136.462.555.7 1.248.465.256-.087.581.055.874.05.507-.008 1.013-.049 1.52-.078.035-.002.075-.04.104-.032 1.518.44 3.02-.387 4.543-.052.537.118 1.099.117 1.712.176l.476-.678c1.088-.112 1.088-.112 2.318.824 1.159-.27 2.221.044 3.165.799l1.048-.226.874.624.498 2.202c-1.219.734.121 1.635-.127 2.464-.637.676-1.209 1.412-1.915 1.984-.465.377-1.117.531-1.693.763-.807.325-1.622.63-2.788 1.081l-2.151-.475-1.78 1.291-1.532-1.402-.957.388c-.429-.195-.979-.353-1.416-.667-.593-.428-1.135-.543-1.854-.328-.44.132-.968-.032-1.45-.206-.72.124-1.437.292-2.162.351-.338.028-.786-.054-1.023-.266-.615-.55-1.304-.703-2.06-.568-.964.172-1.762-.037-2.358-.889l-2.064.964-.931-.462c-1.118.665-1.118.665-2.793-.137-.254.073-.565.196-.888.247-.355.056-.777.172-1.071.042-.973-.432-1.99-.435-3.012-.482a2.793 2.793 0 01-.649-.127c-.831-.247-1.617-.608-2.536-.143-.281.142-.809-.201-1.437-.383-.396.046-1.031.064-1.638.204-.762.175-1.454.17-2.094-.464l-1.672.878c-1.196-.612-2.403-.642-3.464-.177l-1.917-.253-.951.74-2.801-.61c-.036-.008-.074-.034-.107-.027-1.077.218-2.019-.052-2.772-.889l-.982.619-1.649-.643-2.532 1.457c-.84-.586-1.676-.716-2.636-.33-.338.136-.842-.069-1.247-.193-.346-.106-.66-.321-1.013-.5-.992.54-1.997.406-2.968.087l-.646-1.327c-.602.665-1.071 1.446-1.76 1.873-.678.42-1.581.737-2.348-.074-.579.275-1.116.504-1.627.779-.492.264-.958.575-1.552.937l-.196-1.07c-.947.104-1.9.258-2.858.292a2.724 2.724 0 01-1.357-.331c-.665-.37-1.297-.441-2.016-.231-.341.099-.771.181-1.077.06-.9-.357-1.573-.133-2.152.586-.137.17-.322.302-.447.417-.754.245-1.121-.321-1.6-.665-1.275.246-2.55.399-3.515-.133l-2.824.489-1.333-.755c-2.237.931-4.397 2.096-6.919 1.143l-1.843 1.129-1.115-.758c-.646.189-1.237.356-1.823.535-.553.169-1.102.351-1.838.587-.634-.034-1.479-.06-2.319-.137-.201-.018-.386-.204-.565-.306-.427.216-.834.564-1.267.6-.415.035-.858-.255-1.413-.444-.615 0-1.39.046-2.157-.012-.965-.072-1.552.573-2.205 1.082l-2.637-.121c-1.175.975-2.483.195-3.74.121l-1.249.652-1.399-.824c-1.509-.046-2.718.481-4.059.478a11.544 11.544 0 01-3.945-.683c-.389-.139-.914.099-1.232.144-1.921.101-2.972-1.209-4.202-2.181-.179-.142-.39-.494-.329-.646.268-.672-.127-1.227-.238-1.822-.103-.551-.194-1.046.059-1.61.182-.406.122-.92.167-1.359l2.686-1.403c2.578-.785 5.34.411 8.361.828 1.74-.851 3.739-1.012 5.884-.556.536-.341 1.141-.637 1.895-.356.231.086.565-.119.854-.173 1.192-.223 2.385-.439 3.49-.642.98.868 1.97 1.055 3.111.69l.591-.747c1.878-1.157 3.716-.854 5.545-.662.147.015.297.052.441.036.472-.052.953-.218 1.408-.162.457.056.889.326 1.382.522l.594-.781c.135-.023.245-.069.348-.056 1.282.158 2.552.286 3.767-.354.201-.106.504-.072.747-.031.505.085 1.003.219 1.485.328l.488-.564c.865.605 1.712.307 2.546-.07l.781.733c.635-.68 1.387-.878 2.271-.816.521.036 1.369-.67 1.728-1.225h4.005c.42-.37 1.013-.394 1.691-.05.622.316 1.276.274 1.911-.087.241-.137.59-.267.828-.196 1.533.458 3.053.261 4.597-.026l.423 1.052 2.137-.43.105-.99c.412-.044.813-.081 1.213-.13 1.275-.157 2.546-.347 3.825-.461.387-.035.79.16 1.19.207.57.068 1.152.177 1.715.12.511-.051.942-.052 1.331.318.508.483 1.076.573 1.73.281.217-.097.495-.058.746-.073.844-.049 1.688-.094 2.532-.141.147-.008.295-.033.442-.031 2.601.034 5.203.028 7.8.137.699.029 1.369.485 2.076.616 1.186.219 2.457.646 3.571.41 1.21-.255 2.342-.038 3.498-.059 1.614-.029 3.232.156 4.846.279.417.03.827.17 1.378.291z"></path>
            <path d="M129.349 57.511l.193-1.606c.327 0 .688.035 1.04-.009.39-.049.767-.187 1.156-.254 1.244-.215 2.466-.691 3.762-.185.397.155.872.172 1.307.153.732-.032 1.46-.142 2.204-.221l.591.539c1.238.073 2.399.183 3.561.195.849.009 1.712-.007 2.492-.486.166-.102.488.051.718.083l.178.838c.753-.471 1.314-1.272 2.261-.756l.56-.727c.938-.245 1.768-.195 2.654.334 1.094.654 2.386.752 3.647.582.426-.057.815-.385 1.087-.522.744 0 1.382.018 2.019-.004 1.5-.051 2.976-.1 4.441.442.561.208 1.292-.036 1.945-.08.287-.019.575-.088.86-.077 1.066.041 2.132.082 3.195.168.857.069 1.743.006 2.531.482a1.3 1.3 0 00.633.16c.841.009 1.48.397 2.034 1.013.192.926.406 1.86.569 2.804.047.273-.03.575-.086.856-.255 1.283-.796 2.357-1.833 3.255-.508.44-.831 1.091-1.596 1.305l-1.007-.496c-1.18.654-2.404.273-3.634.096-.515-.074-1.05-.012-1.786-.012l-.814-.77-1.752-.533-2.198-.117c-.493.359-1.186.383-1.885-.079l-.835.675-1.399-.544-1.017.236-.553.782c-.624.218-1.157.119-1.589-.295-.385-.368-.81-.463-1.319-.41-.772.081-1.554.085-2.321.2-1.349.201-2.677.861-3.974-.092l-.436.952c-.886-.502-1.967.433-2.726-.541-1.575.396-3.099.797-4.635 1.15-.256.059-.562-.085-.842-.149-.634-.145-1.267-.298-1.931-.455l-.453 1.229-.973-1.028h-1.057l-.764.925c-.463-.745-1.106-.489-1.78-.534-1.226-.083-2.645.346-3.681-.923-.711.667-1.479.574-2.236.205l-1.887 1.383-1.284-.535.042-.215-2.863.777-1.032-.263-.001.148c-.603.016-1.207.019-1.809.052-1.359.074-2.621-.624-4.005-.434l-.348-.68c-.533-.231-.991-.205-1.501.067-1.015.542-2.089.565-3.23.11l-1.027.633-1.266-.792c-.406.281-.753.556-1.133.771-.247.14-.602.34-.807.259-.833-.332-1.675-.11-2.509-.145-.706-.03-1.393-.045-2.009-.473-.162-.113-.425-.135-.635-.117-.758.065-1.54.047-2.265.124-.761.082-1.43-.278-2.206-.145.156.456 1.093.754.347 1.344-.668-.386-1.258-.799-1.905-1.08-.718-.312-1.508-.475-2.249-.072-.64.347-1.233.782-1.811 1.156-1.153-.342-2.006-1.211-3.297-.886-1.068.268-2.311-.162-3.167.868l-.578-.741c-1.645-.049-3.202-.107-4.805-.682l-.969.663c-.875-.341-1.791-.77-2.805-.575-.194.037-.356.242-.574.399l-1.944-.705c-1.076.631-2.182 1.936-3.657.364l-1.877 1.287-1.797-1.258-1.081.373-.971-.332c-1.003.365-1.836.809-2.717.95-.929.148-1.874.177-2.782.478-.651.216-1.13-.196-1.61-.54-.36-.257-.686-.606-1.248-.244l-.15.764c-.147.04-.263.112-.351.086a1.255 1.255 0 01-.482-.243c-.868-.788-1.776-1.021-2.737-.233l-2.85-.238a59.904 59.904 0 00-.024-.161l-1.308.649c-.749-.353-1.255-1.282-2.324-.952-.841.26-1.726.376-2.384.512l-4.103-.798c-.109-.021-.221-.031-.326-.065-.973-.315-2.071-2.504-1.77-3.489.08-.261.148-.556.105-.817-.161-.991.129-1.861.773-2.567 1.091-1.196 2.365-2.077 4.106-2.009.471.018.949-.115 1.423-.179l2.038-.275.68.993c.4-.137.783-.157.986-.358.837-.831 1.768-1.08 2.892-.703.231.077.519.04.769-.007 1.242-.233 2.444-.197 3.709.051 1.173.23 2.431.063 3.649.014 1.127-.046 2.227-.059 3.366.103 1.119.159 2.274.424 3.471.087.847-.239 1.797-.196 2.695-.152.915.045 1.769-.029 2.499-.518l2.449.345c.54.632 1.259.924 2.146.375.087-.054.215-.054.325-.059 1.376-.067 2.754-.102 4.127-.207.604-.046 1.197-.234 1.992-.399.523.236 1.251.572 1.987.892.199.086.46.231.621.168 1.027-.406 2.083-.063 3.12-.132 1.445-.097 2.932-.357 4.367.178.093.035.218-.014.384-.029l.451-.746c.831-.196 1.678-.543 2.534-.567 1.713-.048 3.43.113 5.146.124.948.006 1.903-.211 2.844-.151.755.048 1.493.362 2.419.605.848-.288 1.863-.462 3.001-.267.854.146 1.794-.207 2.811-.355.673.328 1.429.602 2.399.334.791-.218 1.694-.05 2.228.779l.616-.212c.279 1.15 1.385.678 2.098 1.037.507.256 1.052.116 1.604-.038.621-.173 1.283-.212 1.931-.267.725-.061 1.456-.054 2.182-.113.944-.076 1.884-.246 2.827-.256.368-.004.74.316 1.284.57.327-.199.805-.515 1.306-.788.629-.342 1.276-.348 1.908.01.988.558 2.089.172 3.287.628z"></path>
            <path d="M33.918 96.913c1.131-.263 2.234-.539 3.348-.766.349-.071.727-.022 1.09-.001.397.024.792.079 1.175.119l.758-.803 1.809-.257.895 1.156c.752-.585 1.46-.587 2.267-.452.568.095 1.199-.192 1.779-.406 1.061 0 2.121-.001 3.182.001.183 0 .408-.052.541.033.75.482 1.478.25 2.235.029.38-.111.816-.179 1.197-.106 1.552.295 3.086.14 4.627-.059 1.166-.151 2.335-.276 3.504-.406.143-.016.302-.022.433.025.681.242 1.306.125 1.908-.242.485-.296.915-.272 1.434.048.648.399 1.392.642 2.233 1.013l.318-1.277 3.624.208 1.302-.68c.776.759 1.621.75 2.537.569.607-.12 1.244-.094 1.924-.136.435.786 1.158.954 1.968.867 1.424-.153 2.845-.33 4.269-.484.286-.031.578 0 .868-.001.551-.001 1.156.142 1.643-.036 1.201-.439 2.424-.389 3.566-.078 1.282.35 2.565.432 3.861.568.353.037.676.352.971.517 1.117.032 2.218-.008 3.301.114 1.032.116 2.128-.443 3.006.254.935-.069 1.781-.11 2.622-.199.787-.083 1.569-.217 2.354-.328l-.009-.22c.245.069.486.161.735.201.435.071.947.281 1.299.132 1.123-.475 2.254-.527 3.427-.373.106.014.221-.019.329-.042 1.29-.273 1.689-.257 2.887.086.283.081.577.123.881.185l.841 1.161c.979-.534 1.927-1.009 3.046-.531l.66-.745h2.919l.657-.55c1.75-.012 3.409.711 5.102.127.947.73 1.901 1.01 3.12.77 1.091-.215 2.266.025 3.399-.025a14.685 14.685 0 002.511-.354c.412-.091.909-.292 1.139-.609.512-.702 1.199-.83 1.945-.818.96.015 1.91.126 2.842-.278.255-.111.638.042.955.11.461.099.915.232 1.541.393l.661-.841c.97.116 2.028.23 3.082.373.397.054.81.307 1.174.24 1.156-.211 1.958.362 2.781 1.084.328-.056.69-.168 1.052-.168.461 0 .932.048 1.383.148 1.056.234 2.098.461 2.798-.095l3.038-.617c.329.043.81.032 1.237.178.62.212 1.192.561 1.803.805.435.174.893.332 1.355.39 1.216.153 1.684.596 2.078 1.77.338 1.009.396 1.963.025 2.964-.095.255-.014.575-.014 1.002l-2.57 1.783-1.185-.669-1.12.488-1.888-.254-.884 1.624-1.84-.845-.582.198c-.649-.954-1.742-.195-2.413-.604-.738.236-1.348.481-1.981.621-.987.218-1.931.472-2.454 1.528a962.44 962.44 0 00-1.325-.977l-1.262.469c-.813-.318-1.692-.668-2.576-1.005a.945.945 0 00-.43-.059c-1.364.157-2.726.325-3.85.461l-1.992-.96c-.877.785-1.69 1.45-2.614.468-1.205.164-1.979 1.538-3.208.826-.148.051-.242.054-.283.102-1.197 1.416-2.815.982-4.332.994-.427.004-.854.038-1.312.059l-1.495-.855c-1.112.337-2.05.841-3.2.537-.413-.109-.998.358-1.478.612-.252.133-.446.375-.668.569-.969-.088-1.889-.185-2.168-1.318l-1.526.67-.489.744-2.064-1.607c-1.303.314-2.426.44-3.216-.832-.515.32-1.003.639-1.506.93-.635.368-1.01-.239-1.629-.493l-1.645 1.12-2.152-1.331-.649.914c-.723.107-1.405.119-2.14-.2-.537-.233-1.224-.123-1.956-.173l-.677 1.001-2.163-1.266-.384.672c-.757.091-1.425.116-2.147-.285-.675-.375-1.434-.614-2.334-.378-.554.145-1.252-.257-1.971-.434l-.939 1.181-.575-1.021-1.766-.553-.453 1.039-1.439.312-1.083-.732c-.458.113-.955.332-1.452.332-.498 0-.996-.217-1.618-.37-.373.105-.862.291-1.368.373-.499.081-1.016.081-1.524.07-.365-.008-.735-.162-1.092-.131-1.207.107-2.378.241-3.587-.199-.513-.187-1.208.123-2.06.24l-.88-.235c-1.37.955-2.765.429-4.227.288-1.228.704-1.408.67-2.362-.511-.514-.635-.646-.64-1.888-.023-.18-.089-.403-.202-.629-.31-.198-.094-.398-.182-.572-.261-1.385.685-1.385.685-2.418.569l-2.169 1.189-.64-.74c-.782.117-1.565.296-2.356.332-.527.024-1.114-.05-1.581-.274-.516-.247-.937-.269-1.473-.116-.628.18-1.3.2-1.949.314-.542.095-1.1.162-1.61.351-.907.335-1.734.492-2.334-.537l-1.666 1.101a970.5 970.5 0 01-1.455-.69l-3.073-.342c-.531.368-1.251.724-2.217.486-.523-.129-1.147.156-1.657.243-1.417-.652-2.604-1.423-3.083-3.15.094-.565.24-1.323.338-2.087a2.14 2.14 0 00-.072-.868c-.224-.733-.021-1.263.586-1.73.335-.263.564-.665.873-1.042z"></path>
          </g>
        </svg>
      </div>
    </a>
    // </div>
  )
}

export function MobileIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      class="h-10 w-10  stroke-slate-900 lg:h-14 lg:w-14"
    >
      <path
        d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
        fill="none"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>
    </svg>
    // <div class="dgPk4k">
    //   <div class="a9Lpus">
    //     <span class="UBzAay htSWpZ"></span>
    //     <span class="UBzAay jAmyzP"></span>
    //     <span class="UBzAay BDFUUv"></span>
    //   </div>
    // </div>
  )
}
function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="css-p9dp5v VW8_lz block tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  return (
    <header className="">
      <nav>
        <div className="max-w-10xl  mx-none relative z-50 mx-auto flex   justify-between bg-black  px-4 px-4 py-4 sm:px-6 sm:px-6  lg:px-36">
          <div className="a9Lpus relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home" className="">
              <Logo />
              {/* <Image
                alt="leelas-logo"
                src={Logo.src}
                className="opacity-1 h-14 w-auto"
                height={20}
                width={20}
                property
              /> */}
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center  stroke-gray-100 p-2 hover:bg-gray-800/50 hover:stroke-gray-100 active:stroke-gray-100 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/about">About</MobileNavLink>

                            <MobileNavLink href="/services">
                              Services
                            </MobileNavLink>
                            <MobileNavLink href="/#clients">
                              Clients
                            </MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="/#contact">Contact</Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            {/* <Button href="/login" variant="outline" className="hidden lg:block">
              Log in
            </Button> */}
            {/* <DesktopMenuIcon /> */}
            {/* <Button
              href="/#contact"
              className="text-btn  hidden justify-center py-4  px-4 text-center  !text-black text-black hover:bg-gray-700 hover:!text-white  active:text-black  sm:bg-white  lg:block "
            >
              CONTACT
            </Button> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

export const NewHeader = () => {
  return (
    <header className="">
      <nav>
        <div className="relative flex items-center justify-between px-4 pt-1  text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200 lg:pt-8">
          <div id="logo" className="-ml-[10rem] w-[50%] md:-ml-44">
            <Logo />
          </div>

          <div class="lg:border-slate-900/15  border-black lg:ml-8 lg:items-center lg:border-l lg:pl-8">
            <Popover className="">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 mr-2 inline-flex  items-center bg-sky-50  stroke-gray-100 p-2 hover:stroke-gray-100 active:stroke-gray-100 lg:mr-0 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-8 w-8" />
                      ) : (
                        <>
                          {/* <div className="hidden h-14 w-14  bg-sky-200 px-2 lg:flex">
                            <MenuIcon />
                          </div> */}

                          <MobileIcon id="Mobile-BUTTON" className="h-8 w-8 " />
                        </>
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur "
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0  z-30  origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="MrmCZw dmOTL_ dmOTL_">
                            <MobileNavLink href="/about">About</MobileNavLink>

                            <MobileNavLink href="/#services">
                              Services
                            </MobileNavLink>
                            <MobileNavLink href="/#clients">
                              Clients
                            </MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="/#contact">Contact</Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            {/* <MenuIcon /> */}
            {/* <DesktopMenuIcon /> */}
            {/* <Button
              href="/#contact"
              className="text-btn  hidden justify-center py-4  px-4 text-center  !text-black text-black hover:bg-gray-700 hover:!text-white  active:text-black  sm:bg-white  lg:block "
            >
              CONTACT
            </Button> */}
          </div>

          {/* 
          <div class="lg:border-slate-900/15 -mt-20 hidden h-20 w-20 border-black lg:ml-8 lg:flex lg:items-center lg:border-l lg:pl-8">
            <MenuIcon />
          </div> */}
        </div>
      </nav>
    </header>
  )
}
