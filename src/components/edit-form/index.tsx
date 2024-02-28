import { Button, Checkbox, Radio, Switch } from 'antd';
import { useState } from 'react'

type Props = {
}

export function EditFormCard({ }: Props) {

    const data = {
        isProficient: false,
        toolsUsed: [0, 2, 3, 4],
    }

    const options = [
        { label: 'Redux', value: 0 },
        { label: 'Lodash', value: 1 },
        { label: 'Ant design', value: 2 },
        { label: 'Webpack', value: 3 },
        { label: 'Other', value: 4 },
    ];

    const [notEditable, setNotEditable] = useState(true)
    const [isProficient, setIsProficient] = useState(data.isProficient)
    const [toolsUsed, setToolsUsed] = useState(data.toolsUsed)
    return (
        <>
            <div className='w-96 flex flex-col gap-5 bg-white p-8'>
                <div className='w-full flex justify-between '>
                    <div>Editable</div>
                    <Switch onChange={() => setNotEditable(!notEditable)} />
                </div>
                <div className='flex flex-col gap-2.5'>
                    <div className='text-lg font-semibold '>Are you proficient in ReactJS <br />development?</div>
                    <Radio.Group value={isProficient} onChange={(e) => setIsProficient(e.target.value)} disabled={notEditable} className='flex flex-col gap-2.5 text-base font-medium'>
                        <Radio value={false}>No</Radio>
                        <Radio value={true}>Yes</Radio>
                    </Radio.Group>
                </div>
                <div className='flex flex-col gap-2.5'>
                    <div className='text-lg font-semibold'>Which tools do you use?</div>
                    <div className='text-md text-slate-500'>Please select all that apply.</div>
                    <Checkbox.Group options={options} disabled={notEditable} defaultValue={toolsUsed} className='flex flex-col gap-2.5 text-base font-medium' />
                </div>
                <div className='flex justify-center w-full pt-4'>
                    <Button type='primary' size='large' disabled={notEditable}>Process</Button>
                </div>
            </div >
        </>
    )
}