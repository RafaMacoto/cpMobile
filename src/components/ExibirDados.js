import { StyleSheet, Text, View } from "react-native"

export default function ExibirDados(props) {

    return (
        <View style={styles.container} >
            <Text style={styles.texto} > Nome do produto: {props.nome}</Text>
            <Text style={styles.texto}>Preço original: R${props.valorProd}</Text>
            <Text style={styles.texto}>Aumento: {props.porcentagem}%</Text>
            <Text style={styles.texto}>Novo valor: R${props.novoValor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        gap: 5,
        marginTop: 10,
        borderRadius: 10
    },
    texto: {
        color: 'white',
        fontSize: 22
    }
})