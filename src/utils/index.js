export default {
  GO_BACK(_vm){
    _vm.$router.go(-1)
  },
  CyclicData(_vm,key,array){
    for (var i = 0; i < array.length; i++) {
      if(array[i].action == key){
        _vm.itemData = array[i]
        break;
      }
    }
  }
}
