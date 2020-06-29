import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

import firebase from './src/services/firebaseConnection';



const App = () => {

  console.disableYellowBox=true;

  
  const inputRef = useRef(null);
  const[newTask, setNewTask] = useState('');
  const[tasks, setTasks] = useState([]);
  const[cor, setCor] = useState([
    '#2ecc71', '#3498db', '#e74c3c', '#f39c12', '#e17055',
    '#8e44ad', '#2c3e50', '#95a5a6', '#c0392b', '#74b9ff',
  ]);

  useEffect(()=>{
    async function loadTask(){
      await firebase.database().ref('tarefas').on('value', (snapshot)=> {
        setTasks([]);

        snapshot.forEach((childItem)=> {
          let data = {
            key: childItem.key,
            nome: childItem.val().nome,
            cor: childItem.val().cor,
          };

          setTasks(oldArray => [...oldArray, data]);
        });
      });
    }

    loadTask();
  },[]);

  // Cadastra um novo usuário
  // async function cadastrar(){
  //   if(email !== '' && senha !== ''){
  //     await firebase.auth().createUserWithEmailAndPassword(email, senha)
  //     .then( (value) => {
  //       alert('Usuário criado com sucesso: \n' + value.user.email);
  //     })
  //     .catch( (error)=> {
  //       if(error.code === 'auth/weak-password'){
  //         alert('Senha deve ter no mínimo 6 caracters');
  //         return;
  //       } else {
  //         alert('Algo deu errado');
  //         return;
  //       }
  //     });
  //   } else {
  //     alert('Preencha todos os campos!!!');
  //   }

  //   setEmail('');
  //   setSenha('');
  // }

  // Fazer loguin no sistema
  // async function logar(){
  //   await firebase.auth().signInWithEmailAndPassword(email, senha)
  //   .then( (value) => {
  //     alert('Bem-vindo ' + value.user.email)
  //   })
  //   .catch( (error) => {
  //     alert(error + ' ALgo deu errado')
  //   })

  //   setEmail('');
  //   setSenha('');
  // }

  // Adicionando tarefas
  async function handleAdd(){
    if(newTask !== ''){
      let random = Math.floor(Math.random() * 10);
      let fundo = cor[random];

      let tarefas = await firebase.database().ref('tarefas');
      let chave = tarefas.push().key;

      tarefas.child(chave).set({
        nome: newTask,
        cor: fundo
      });

      Keyboard.dismiss();
      setNewTask('');
    } else {
      Alert.alert('Tarefas avisa!','O campo está vazio');
    }

    setVisible(true);
  }

  function handleDelete(key, nome){
    Alert.alert('Tarefas avisa',
    `Tarefa: ${nome}`,
    [
      {
        text: 'Cancelar',
        style:'cancel'
      },
      {
        text:'Confirmar',
        onPress: () => removeTask(key)
      }
    ]
    );
  }

  async function removeTask(key){
    await firebase.database().ref('tarefas').child(key).remove();
  }

  function handleEdit(data){
    setNewTask(data.nome);
    inputRef.current.focus();
  }

  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txtTarefas}> Tarefas </Text>
          </View>
          <View style={styles.containerTopo}>
            <TextInput
              style={styles.input}
              value={newTask}
              placeholder="Tarefas"
              onChangeText={(item)=> setNewTask(item)}
              ref={inputRef}
            />

            <TouchableOpacity style={styles.btnCadastrar} onPress={()=> handleAdd()}>
              <Text style={styles.txtCadastrar}> + </Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            <FlatList
              data={tasks}
              keyExtractor={ item => item.key}
              renderItem={({item}) => <List data={item} deleteItem={handleDelete} editItem={handleEdit} />}
            />
          </ScrollView>
          <Text> Desenvolvido por: Marcelo Rafael </Text>
        </View>
    </>
  );
};

export function List({ data, deleteItem, editItem }){

  return(
    <View style={[styles.containerList, { backgroundColor: data.cor}]}>
      <TouchableOpacity onPress={()=> deleteItem(data.key, data.nome)}>
        <Image style={styles.img} source={require('./src/assets/bin.png')} />
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={()=> editItem(data)}>
        <Text style={styles.txtList}> {data.nome} </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '85%',
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    margin: 5,
    borderRadius: 8,
    padding: 10
  },
  btnCadastrar: {
    backgroundColor: '#2d3436',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    marginTop: 5,
    borderRadius: 8,
  },
  txtCadastrar: {
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 20,
    color:'#FFF',
  },
  containerTopo: {
    flexDirection: 'row',
    margin: 10,
  },
  containerList: {
    margin: 5,
    flexDirection:'row',
    padding: 10,
    borderRadius: 8,
  },
  txtList:{
    fontSize: 15,
    color:'#FFF',
    marginLeft: 5,
  },
  img: {
    width: 20,
    height: 20,
  },
  header: {
    width:'100%',
    height:'8%',
    backgroundColor:'#2d3436',
    alignItems:'center',
    justifyContent:'center'
  },
  txtTarefas: {
    color: '#FFF',
    fontSize: 20,
    fontWeight:'bold',
  },
});

export default App;
