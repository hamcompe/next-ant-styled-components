import Head from 'next/head'
import {
  Form,
  Select,
  Input,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  LocaleProvider
} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import Main from '../layouts/Main'
import styled from 'styled-components'

const FormItem = Form.Item
const Option = Select.Option

const FormWrapper = styled.div`
  label {
    font-size: 22px !important;
  }
  input {
    font-size: 22px !important;
  }
`

export default () =>
  <Main>
    <FormWrapper>
      <Form layout="horizontal">
        <FormItem
          className="big-input"
          label="My Big Input"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Input placeholder="Put something big" />
        </FormItem>
      </Form>
    </FormWrapper>
  </Main>
