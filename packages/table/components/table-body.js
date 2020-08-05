export default {
    props:{
        columns:Array,
        data:Array,
        fixed:String
    },
    render(h){
        const {columns,data,fixed} = this;

        return (
            <div class={[
                'small-table-body'
            ]}>
                <table cellpadding="0" cellspacing="0" border="0" class="small-table-body_table">
                    <tbody>
                        {data.map((item,index)=>{
                            return (
                                <tr key={index}>
                                    {columns.map((_item,_index)=>{
                                        return (
                                            <td  width={_item.width} >
                                                <div class={[
                                                    'small-table-cell',
                                                    'small-table-body-'+_item.align
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
                                                                        (item[_item.prop]||'')
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
        );
    }
}
