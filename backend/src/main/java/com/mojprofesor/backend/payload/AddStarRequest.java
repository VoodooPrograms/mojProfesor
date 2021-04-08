/*
 *  Copyright (c) 2021, Onteon Tech and/or its affiliates.
 *  All rights reserved.
 *  Use is subject to license terms.
 */
package com.mojprofesor.backend.payload;

import lombok.Data;

import javax.validation.constraints.NotNull;

/**
 * @author Patryk Borchowiec
 * @since 0.0.0
 */
@Data
public class AddStarRequest {
    @NotNull
    private Integer opinion;
}
