var colModel = [[
    {
        field: 'ck',
        checkbox: true,
        singleSelect: true
    },
    {
        field: 'name',
        title: '名称',
        width: '8%'
    },
    {
        field: 'remark',
        title: '备注',
        width: '8%'
    },
    {
        field: 'systemName',
        title: '所属系统',
        width: '8%'
    },
    {
        field: 'status',
        title: '状态',
        width: '5%',
        formatter: function (value, row, index) {
            if (value == '1') {
                return '可用';
            } else if (value == '2') {
                return '禁用';
            } else {
                return value;
            }
        }
    },
    {
        field: 'createName',
        title: '创建人',
        width: '8%'
    },
    {
        field: 'createTime',
        title: '创建时间',
        width: '15%'
    }
]];