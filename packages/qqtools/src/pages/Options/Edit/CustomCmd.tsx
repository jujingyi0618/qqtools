import * as React from 'react';
import { Fragment, useState, ReactElement, Dispatch as D, SetStateAction as S, MouseEvent } from 'react';
import * as PropTypes from 'prop-types';
import { Table, Button, Space, Input, Modal, Form, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { FormInstance } from 'antd/es/form';
import type { Store } from 'rc-field-form/es/interface';
import { random, findIndex } from 'lodash';
import style from './customCmd.sass';

interface EditItem {
  id: string;
  cmd: string;
  value: string;
}

interface CustomCmdProps {
  id?: string;
  value?: Array<EditItem>;
  onChange?: Function;
}

/* 自定义命令组件 */
function CustomCmd(props: CustomCmdProps): ReactElement {
  const [visible, setVisible]: [boolean, D<S<boolean>>] = useState(false);
  const [editItem, setEditItem]: [EditItem | undefined, D<S<EditItem | undefined>>] = useState(undefined);
  const [form]: [FormInstance] = Form.useForm();

  // 关闭
  function handleCancelClick(event: MouseEvent): void {
    setEditItem(undefined);
    setVisible(false);
  }

  // 确认添加或修改
  async function handleOkClick(event: MouseEvent): Promise<void> {
    let formValue: Store | null = null;

    try {
      formValue = await form.validateFields();
    } catch (err) {
      return console.error(err);
    }

    if (!formValue) return;

    try {
      JSON.parse(formValue.value);
    } catch (err) {
      message.error('发送的数据必须是json格式。');

      return console.error(err);
    }

    const val: Array<EditItem> = props.value ?? [];

    if (editItem && props.value) {
      const index: number = findIndex(val, { id: editItem.id });

      props.value[index] = {
        id: editItem.id,
        cmd: formValue.cmd,
        value: formValue.value
      };
    } else {
      val.push({
        id: String(random(1, 10000000)),
        cmd: formValue.cmd,
        value: formValue.value
      });
    }

    props.onChange?.([...val]);
    handleCancelClick(event);
  }

  // 新增或者编辑
  function handleAddClick(item: EditItem | undefined, event: MouseEvent): void {
    setVisible(true);
    setEditItem(item);
    item && form.setFieldsValue(item);
  }

  const columns: ColumnsType<any> = [
    { title: '命令', dataIndex: 'cmd' },
    {
      title: '操作',
      key: 'handle',
      width: 290,
      render: (value: undefined, record: EditItem, index: number): ReactElement => (
        <Button.Group>
          <Button onClick={ (event: MouseEvent): void => handleAddClick(record, event) }>修改</Button>
          <Button type="primary" danger={ true }>删除</Button>
        </Button.Group>
      )
    }
  ];

  return (
    <Fragment>
      <Space className={ style.customCmdBox } direction="vertical">
        <Button onClick={ (event: MouseEvent): void => handleAddClick(undefined, event) }>添加命令</Button>
        <Table columns={ columns }
          dataSource={ props.value ?? [] }
          rowKey="id"
        />
      </Space>
      <Modal visible={ visible }
        width={ 500 }
        destroyOnClose={ true }
        centered={ true }
        onOk={ handleOkClick }
        onCancel={ handleCancelClick }
      >
        <Form className={ style.edit } form={ form }>
          <Form.Item name="cmd" rules={ [{ required: true, message: '必须填写命令' }] }>
            <Input placeholder="命令" />
          </Form.Item>
          <Form.Item name="value" rules={ [{ required: true, message: '必须填写发送的数据' }] }>
            <Input.TextArea rows={ 14 } placeholder="发送的数据，必须是json格式" />
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
}

CustomCmd.propTypes = {
  id: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func
};

export default CustomCmd;