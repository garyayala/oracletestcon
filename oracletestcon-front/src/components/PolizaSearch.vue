<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-6">
        <h5>Buscar póliza</h5>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Ingresa el # de póliza" v-model="request.poliza" required>
        </div>
        <button class="btn btn-success" @click="find()" :disabled="!request.poliza || isLoading">Buscar</button>
      </div>
    </div>
    <div class="row mt-3 justify-content-center" v-if="responseStatus">
      <div class="col-12 col-sm-6">
        <p class="alert" :class="{'alert-info': !error , 'alert-danger': error}">{{ !error ? message : error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios-api'

export default {
  data () {
    return {
      request: {
        poliza: ''
      },
      responseStatus: null,
      message: null,
      isLoading: false,
      status: '',
      error: null
    }
  },
  methods: {
    async find () {
      this.responseStatus = null
      this.error = null
      this.message = null
      this.isLoading = true
      try {
        const { data } = await axios.get(`polizas?poliza=${this.request.poliza}`)
        this.message = data
      } catch (e) {
        this.error = e
      }

      this.responseStatus = true
      this.isLoading = false
    }
  }
}
</script>

<style>

</style>
