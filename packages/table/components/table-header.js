
export default {
    props:{
        columns:Array
    },
    render(){
        const {columns} = this;
        return (
            <div class="small-table-header">
                <table cellPadding="0" cellSpacing="0" border="0" class="small-table-header_table">
                    <thead>
                        <tr>
                            {columns.map((item,index)=>{
                                return (
                                    <th  width={item.width}>
                                        <div class={[
                                            'small-table-cell',
                                            'small-table-header-'+item.align
                                        ]}>{item.label}</div>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}
