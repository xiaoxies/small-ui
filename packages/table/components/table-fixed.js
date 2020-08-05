export default {
    props:{
        fixed:{type:String,default:"left"},
        data:Array,
        column:Array,
        height:Array
    },
    render(h){
        const {data,column,height} = this;

        return (
            <div class="small-table-fixed-shadow">
                <div class="small-table-header">
                    <table cellPadding="0" cellSpacing="0" border="0" class="small-table-fixed-header">
                        <thead>
                        <tr>
                            {column.map((item, index) => {
                                return (
                                    <th width={item.width}>
                                        <div class={[
                                            'small-table-cell',
                                            'small-table-header-' + item.align
                                        ]}>{item.label}</div>
                                    </th>
                                );
                            })}
                        </tr>
                        </thead>
                    </table>
                </div>
                <div class={[
                    'small-table-body'
                ]}>
                    <table cellPadding="0" cellSpacing="0" border="0" class="small-table-fixed-body">
                        <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    {column.map((_item, _index) => {
                                        return (
                                            <td width={_item.width} height={height[index]-21}>
                                                <div class={[
                                                    'small-table-cell',
                                                    'small-table-body-' + _item.align
                                                ]}>
                                                    {
                                                        _item.$scopedSlots.default
                                                            ?
                                                            _item.$scopedSlots.default(item)
                                                            :
                                                            (
                                                                _item.$slots.default
                                                                    ?
                                                                    [_item.$scopedSlots.default]
                                                                    :
                                                                    (item[_item.prop] || '')
                                                            )
                                                    }
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
