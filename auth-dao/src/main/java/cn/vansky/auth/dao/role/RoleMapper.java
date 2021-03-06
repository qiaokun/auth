/*
 * Copyright (C) 2015 CK, Inc. All Rights Reserved.
 */

package cn.vansky.auth.dao.role;

import cn.vansky.auth.bo.role.Role;
import cn.vansky.auth.dto.role.RoleDto;
import cn.vansky.framework.core.dao.DaoMapper;
import cn.vansky.framework.core.orm.mybatis.annotation.SqlMapper;

import java.util.List;
import java.util.Map;

/**
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table tb_role
 *
 * @mbggenerated 2015-09-05 14:06:23
 */
@SqlMapper
public interface RoleMapper extends DaoMapper<Role, Integer> {

    public List<RoleDto> findPageList(Map<String, Object> params);
}