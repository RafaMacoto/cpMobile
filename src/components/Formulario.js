import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import ExibirDados from "./ExibirDados"

export default function Formulario() {

    const [nome, setNome] = useState('')
    const [valorProduto, setValorProduto] = useState(0)
    const [aumento, setAumento] = useState(0)
    const [resultado, setResultado] = useState(null)

    const [mostrarDados, setMostrarDados] = useState(false)

    function novoValor() {
        if (valorProduto > 0) {
            const porcentagem = (valorProduto * aumento) / 100
            const valorNovo = parseFloat(valorProduto) + parseFloat(porcentagem)
            setResultado(valorNovo)
        }


    }

    return (
        <View style={styles.container}  >
            <Text style={styles.text}>Nome:</Text>
            <TextInput style={styles.input} value={nome} placeholder='Digite o nome do produto'
                onChangeText={text => setNome(text)}
            />

            <Text style={styles.text}>Valor do produto:</Text>
            <TextInput style={styles.input} value={valorProduto} placeholder='Digite o valor do produto'
                onChangeText={text => parseFloat(setValorProduto(text))} keyboardType='numeric'
            />

            <Text style={styles.text}>Porcentagem de aumento:</Text>
            <TextInput style={styles.input} value={aumento} placeholder='Digite a porcentagem'
                onChangeText={text => parseFloat(setAumento(text))} keyboardType='numeric'
            />
            <Button style={styles.botao}
                title='Clique aqui para enviar'
                color={'#23282b'}
                onPress={() => setMostrarDados(true) & novoValor()}
            />
            {mostrarDados && resultado && <ExibirDados
                nome={nome} valorProd={valorProduto} porcentagem={aumento} novoValor={resultado} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    input: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 6,
        fontSize: 25,
        padding: 7,
        marginBottom: 7,
        width: '80%'
    },
    text: {
        marginBottom: 10,
        marginTop: 20,
        fontSize: 30
    },
    botao: {
        marginTop: 30,
        padding: 20,
        width: 10,
        borderRadius: 30
    }
})