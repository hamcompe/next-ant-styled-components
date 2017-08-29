import Head from 'next/head'
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  LocaleProvider
} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

const FormItem = Form.Item
const Option = Select.Option

export default ({ children }) =>
  <LocaleProvider locale={enUS}>
    <div style={{ marginTop: 100 }}>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css"
        />
      </Head>
      <main>
        {children}
      </main>
    </div>
  </LocaleProvider>
