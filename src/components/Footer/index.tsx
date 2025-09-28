import { DonatingCard } from '../DonatingCard'
import { StickerButton } from '../DonatingCard/components/StickerButton'
import redBookCode from '@/assets/redBook-code.jpg'
import InfoPanel from '@/components/InfoPanel'
import Tooltip from '@/components/Tooltip'
import { infoPanelStateAtom } from '@/store'
import type { InfoPanelType } from '@/typings'
import { recordOpenInfoPanelAction } from '@/utils'
import { useAtom } from 'jotai'
import type React from 'react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import IconMail from '~icons/material-symbols/mail'
import IconCoffee2 from '~icons/mdi/coffee'
import IconXiaoHongShu from '~icons/my-icons/xiaohongshu'
import RiLinksLine from '~icons/ri/links-line'
import IconTwitter from '~icons/ri/twitter-fill'
import IconGithub from '~icons/simple-icons/github'
import IconVisualstudiocode from '~icons/simple-icons/visualstudiocode'
import IconWechat2 from '~icons/simple-icons/wechat'
import IconWechat from '~icons/tabler/brand-wechat'
import IconCoffee from '~icons/tabler/coffee'
import IconTerminal2 from '~icons/tabler/terminal-2'
import IconFlagChina from '~icons/twemoji/flag-china'

const Footer: React.FC = () => {
  const [infoPanelState, setInfoPanelState] = useAtom(infoPanelStateAtom)
  const navigate = useNavigate()

  const handleOpenInfoPanel = useCallback(
    (modalType: InfoPanelType) => {
      recordOpenInfoPanelAction(modalType, 'footer')
      setInfoPanelState((state) => ({ ...state, [modalType]: true }))
    },
    [setInfoPanelState],
  )

  const handleCloseInfoPanel = useCallback(
    (modalType: InfoPanelType) => {
      setInfoPanelState((state) => ({ ...state, [modalType]: false }))
    },
    [setInfoPanelState],
  )

  return (
    <>
      <InfoPanel
        openState={infoPanelState.donate}
        title="Buy us a coffee"
        icon={IconCoffee}
        buttonClassName="bg-amber-500 hover:bg-amber-400"
        iconClassName="text-amber-500 bg-amber-100 dark:text-amber-300 dark:bg-amber-500"
        onClose={() => handleCloseInfoPanel('donate')}
      >
        <p className="indent-4 text-sm text-gray-500 dark:text-gray-300">
          Thank you very much for using Qwerty Learner. The website is currently maintained in our spare time. To ensure that the website
          can continue to provide you with high-quality services, we need your help!
          <br />
          Your donations will help us pay for website operating costs, improve website functionality and design, and enhance user
          experience.
          <br />
        </p>
        <br />
        <p className="indent-4 text-sm text-gray-700 dark:text-gray-200">
          We believe that joint efforts can make Qwerty Learner a better learning platform, and we also believe that your support will give
          us the motivation to continue moving forward. Thank you for your support!
        </p>
        <br />
        <p className="indent-4 text-sm text-gray-700 dark:text-gray-200">
          To thank you for your generosity, for donations of 50 RMB or more, we will give you 5 custom Qwerty stickers
          <span className="text-xs">(Mainland China only)</span>, hope you can share your joy with friends
        </p>
        <div className="flex items-center justify-center py-2">
          <StickerButton className="" />
        </div>

        <DonatingCard />
      </InfoPanel>

      <InfoPanel
        openState={infoPanelState.vsc}
        title="VSCode Plugin"
        icon={IconTerminal2}
        buttonClassName="bg-sky-500 hover:bg-sky-400"
        iconClassName="text-sky-500 bg-sky-100 dark:text-sky-300 dark:bg-sky-500"
        onClose={() => handleCloseInfoPanel('vsc')}
      >
        <p className="text-sm text-gray-500  dark:text-gray-400">
          We have developed a VSCode plugin based on everyone&apos;s suggestions, supporting one-click startup to start memorizing words at
          any time. You can start it with one click in any file. After starting, words will be displayed in the status bar, and the plugin
          will intercept user input to the document without affecting the original document.
        </p>
        <br /> <br />
        <a className="mr-5 underline dark:text-gray-300" href="https://github.com/Kaiyiwing/qwerty-learner-vscode">
          GitHub Project
        </a>
        <a className="underline dark:text-gray-300" href="https://marketplace.visualstudio.com/items?itemName=Kaiyi.qwerty-learner">
          VSCode Plugin Link
        </a>
        <br />
      </InfoPanel>

      <InfoPanel
        openState={infoPanelState.community}
        title="User Community"
        icon={IconWechat}
        buttonClassName="bg-green-500 hover:bg-green-400"
        iconClassName="text-green-500 bg-green-100 dark:text-green-300 dark:bg-green-500"
        onClose={() => handleCloseInfoPanel('community')}
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Qwerty Learner is an open source project aimed at providing users with high-quality and reliable typing practice tools.
          <br />
          After joining our user community, you can communicate with our development team, share your usage experience and suggestions, help
          us improve the product, and also keep up with our latest news and updates in a timely manner.
          <br />
          <br />
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          We firmly believe that good interaction and feedback with users is an important factor in driving us to continuously move forward
          and improve. Therefore, we sincerely invite you to join our community and work with us to build a better &quot;Qwerty
          Learner&quot;!
        </p>
        <br />
        <p className="text-sm text-gray-500  dark:text-gray-400">Thank you again for your support and attention!</p>
        <br />
        <img className="ml-1 w-2/6 " src="https://qwerty.kaiyi.cool/weChat-group.png" alt="weChat-group" />
        <br />
      </InfoPanel>

      <InfoPanel
        openState={infoPanelState.redBook}
        title="Red Book Community"
        icon={IconXiaoHongShu}
        buttonClassName="bg-red-500 hover:bg-red-400"
        iconClassName="text-red-500 bg-red-100 dark:text-red-600 dark:bg-red-500"
        onClose={() => handleCloseInfoPanel('redBook')}
      >
        <p className="text-sm text-gray-500  dark:text-gray-400">
          Qwerty Learner is an open source project aimed at providing users with high-quality and reliable typing practice tools.
          <br />
          After following Red Book, you can get the latest news and updates from the development team, provide feedback on your usage
          experience and suggestions, and help us improve the product.
          <br />
          <br />
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          We firmly believe that good interaction and feedback with users is an important factor in driving us to continuously move forward
          and improve. Therefore, we sincerely invite you to follow our Red Book account and work with us to build a better &quot;Qwerty
          Learner&quot;!
        </p>
        <br />
        <img className="ml-1 w-5/12 " src={redBookCode} alt="redBook" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Tips: Click the three dots in the top left corner of &quot;Me&quot; in Red Book to find &quot;Scan&quot;
        </p>
        <br />
      </InfoPanel>

      <footer className="mb-1 mt-4 flex w-full items-center justify-center gap-2.5 text-sm ease-in" onClick={(e) => e.currentTarget.blur()}>
        <a href="https://github.com/Kaiyiwing/qwerty-learner" target="_blank" rel="noreferrer" aria-label="Go to GitHub project homepage">
          <IconGithub fontSize={15} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100" />
        </a>

        <button
          className="cursor-pointer"
          type="button"
          onClick={(e) => {
            handleOpenInfoPanel('redBook')
            e.currentTarget.blur()
          }}
          aria-label="Join our Red Book community"
        >
          <IconXiaoHongShu fontSize={14} className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500" />
        </button>

        <button
          className="cursor-pointer focus:outline-none"
          type="button"
          onClick={(e) => {
            handleOpenInfoPanel('community')
            e.currentTarget.blur()
          }}
          aria-label="Join our WeChat user group"
        >
          <IconWechat2 fontSize={16} className="text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500" />
        </button>

        <a href="https://twitter.com/real_kai42" target="_blank" title="x" rel="noreferrer">
          <IconTwitter fontSize={16} className="text-gray-500 hover:text-[#1DA1F2] dark:text-gray-400 dark:hover:text-[#1DA1F2]" />
        </a>
        <button
          className="cursor-pointer focus:outline-none "
          type="button"
          onClick={(e) => {
            handleOpenInfoPanel('donate')
            e.currentTarget.blur()
          }}
          aria-label="Consider donating to us"
        >
          <IconCoffee2 fontSize={16} className="text-gray-500 hover:text-amber-500 dark:text-gray-400 dark:hover:text-amber-500" />
        </button>

        <button
          className="cursor-pointer focus:outline-none"
          type="button"
          onClick={(e) => {
            handleOpenInfoPanel('vsc')
            e.currentTarget.blur()
          }}
          aria-label="Use Visual Studio Code plugin version of Qwerty Learner"
        >
          <IconVisualstudiocode fontSize={14} className="text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-500" />
        </button>

        <a
          href="mailto:me@kaiyi.cool"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.currentTarget.blur()}
          aria-label="Send email to me@kaiyi.cool"
        >
          <IconMail fontSize={16} className="text-gray-500 hover:text-indigo-400 dark:text-gray-400 dark:hover:text-indigo-400" />
        </a>
        <a
          rel="noreferrer"
          className="cursor-pointer focus:outline-none"
          onClick={() => navigate('/friend-links')}
          aria-label="View friend links"
        >
          <RiLinksLine fontSize={14} className="text-gray-500 hover:text-indigo-400 dark:text-gray-400 dark:hover:text-indigo-400" />
        </a>

        <Tooltip content="Mainland China Mirror">
          <a href="https://kaiyiwing.gitee.io/qwerty-learner" target="_self" title="Go to Mainland China mirror">
            <IconFlagChina fontSize={16} />
          </a>
        </Tooltip>

        <button
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          type="button"
          onClick={(e) => {
            handleOpenInfoPanel('donate')
            e.currentTarget.blur()
          }}
        >
          @ Qwerty Learner
        </button>

        <a
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noreferrer"
        >
          鲁ICP备2022030649号
        </a>
        <span className="select-none rounded bg-slate-200 px-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          Build <span className="select-all">{LATEST_COMMIT_HASH}</span>
        </span>
      </footer>
    </>
  )
}

export default Footer
