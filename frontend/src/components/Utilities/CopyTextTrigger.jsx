/* eslint-disable no-unused-expressions */
import toast from 'react-hot-toast'
import CopyIcn from '../../Icons/CopyIcn'
import { __ } from '../../Utils/i18nwrap'

export default function CopyTextTrigger({ value, setSnackbar, toastShow, className, readOnly }) {
  const copyText = e => {
    const cpyBtn = e.target
    cpyBtn.setAttribute('style', '--tooltip-txt: "Copied"')
    setSnackbar && setSnackbar({ show: true, msg: __('Copied on Clipboard.', 'integration-for-zoho-campaigns-and-cf7') })
    const text = e.target.parentNode.children[0]
    text.select()
    text.setSelectionRange(0, 99999)
    document.execCommand('copy')
    toastShow && toast.success(__('Copied on Clipboard.'))
    setTimeout(() => { cpyBtn.setAttribute('style', '--tooltip-txt: "Copy"') }, 2000)
  }

  return (
    <div className={className}>
      <textarea className='copyCustomTrigger' readOnly={readOnly}  value={value} />
      <button onClick={copyText} className="tooltip" style={{ '--tooltip-txt': '"Copy"' }} aria-label="Copy" type="button">
          <CopyIcn size="14" />
        </button>
    </div>
  )
}
