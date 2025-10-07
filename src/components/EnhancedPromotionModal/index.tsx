import noop from '../../utils/noop'
import { hasSeenEnhancedPromotionAtom } from '@/store'
import { Dialog, Transition } from '@headlessui/react'
import { useAtom } from 'jotai'
import type React from 'react'
import { Fragment, useEffect, useState } from 'react'
import IconStar from '~icons/heroicons/star-solid'
import IconX from '~icons/tabler/x'

const EnhancedPromotionModal: React.FC = () => {
  const [hasSeenPromotion, setHasSeenPromotion] = useAtom(hasSeenEnhancedPromotionAtom)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Only show modal if user hasn't seen it before
    if (!hasSeenPromotion) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000) // Show after 2 seconds to let the page load

      return () => clearTimeout(timer)
    }
  }, [hasSeenPromotion])

  const handleTryNow = () => {
    setHasSeenPromotion(true)
    // setIsOpen(false)
    // Open in new tab
    window.open('https://qwertylearner.ai', '_blank')
  }

  const handleDismiss = () => {
    setHasSeenPromotion(true)
    setIsOpen(false)
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={noop}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="dark:via-gray-850 relative transform overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-0 text-left shadow-2xl transition-all dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 sm:my-8 sm:w-full sm:max-w-xl">
                {/* Header with close button */}
                <div className="absolute right-4 top-4 z-10">
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    title="Close"
                  >
                    <IconX className="h-5 w-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="px-8 pb-8 pt-10">
                  {/* Icon and title */}
                  <div className="mb-6 text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                      <IconStar className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
                      Experience QwertyLearner.ai
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Unlock a more powerful learning experience ✨</p>
                  </div>

                  {/* Main content */}
                  <div className="space-y-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    <p className="text-center font-medium text-gray-900 dark:text-white">
                      Don&apos;t know programming? Want to have your own exclusive learning dictionary? Simple operation, one-click upload,
                      click to use
                      <br />
                      <div className="my-2"></div>
                      Then, we recommend you try QwertyLearner.ai developed and operated by the UK DeepLearningAI professional team
                    </p>

                    <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                      <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">🚀 Professional Features</h4>
                      <ul className="space-y-2.5">
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-blue-500">•</span>
                          <span>
                            <strong>AI Smart Dictionary</strong> - One-click upload, intelligently generate definitions and parts of speech,
                            create exclusive custom dictionaries
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-blue-500">•</span>
                          <span>
                            <strong>Article Practice</strong> - Customize article content to improve practical skills
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-blue-500">•</span>
                          <span>
                            <strong>Cloud Sync</strong> - Multi-device practice records and error book synchronization
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-blue-500">•</span>
                          <span>
                            <strong>Dictionary Selection</strong> - More rich professional dictionaries
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-amber-50 p-3 text-xs text-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
                      <p>
                        <strong>Note:</strong>QwertyLearner.ai is independently developed and operated by UK DeepLearningAI, as an
                        independent derivative version of the open source QwertyLearner , the open source version will continue to maintain
                        open source and open operation.
                      </p>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-8 space-y-3">
                    <button
                      type="button"
                      onClick={handleTryNow}
                      className="w-full transform rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      🚀 Try QwertyLearner.ai Now
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default EnhancedPromotionModal
