import standardTypingHandPosition from '@/assets/standard_typing_hand_position.png'

export default function HandPositionKeyboard() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Standard Typing Hand Position</div>
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <img
          src={standardTypingHandPosition}
          alt="Standard typing hand position"
          className="h-auto max-w-full"
          style={{ maxHeight: '200px' }}
        />
      </div>
    </div>
  )
}
