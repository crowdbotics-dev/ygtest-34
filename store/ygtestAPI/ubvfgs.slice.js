import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_ubvfg_list = createAsyncThunk(
  "ubvfgs/api_v1_ubvfg_list",
  async payload => {
    const response = await apiService.api_v1_ubvfg_list(payload)
    return response.data
  }
)
export const api_v1_ubvfg_create = createAsyncThunk(
  "ubvfgs/api_v1_ubvfg_create",
  async payload => {
    const response = await apiService.api_v1_ubvfg_create(payload)
    return response.data
  }
)
export const api_v1_ubvfg_retrieve = createAsyncThunk(
  "ubvfgs/api_v1_ubvfg_retrieve",
  async payload => {
    const response = await apiService.api_v1_ubvfg_retrieve(payload)
    return response.data
  }
)
export const api_v1_ubvfg_update = createAsyncThunk(
  "ubvfgs/api_v1_ubvfg_update",
  async payload => {
    const response = await apiService.api_v1_ubvfg_update(payload)
    return response.data
  }
)
export const api_v1_ubvfg_partial_update = createAsyncThunk(
  "ubvfgs/api_v1_ubvfg_partial_update",
  async payload => {
    const response = await apiService.api_v1_ubvfg_partial_update(payload)
    return response.data
  }
)
export const api_v1_ubvfg_destroy = createAsyncThunk(
  "ubvfgs/api_v1_ubvfg_destroy",
  async payload => {
    const response = await apiService.api_v1_ubvfg_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const ubvfgsSlice = createSlice({
  name: "ubvfgs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_ubvfg_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ubvfg_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ubvfg_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ubvfg_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ubvfg_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ubvfg_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ubvfg_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ubvfg_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ubvfg_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ubvfg_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ubvfg_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ubvfg_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ubvfg_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ubvfg_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ubvfg_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ubvfg_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ubvfg_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ubvfg_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_ubvfg_list,
  api_v1_ubvfg_create,
  api_v1_ubvfg_retrieve,
  api_v1_ubvfg_update,
  api_v1_ubvfg_partial_update,
  api_v1_ubvfg_destroy,
  slice: ubvfgsSlice
}
