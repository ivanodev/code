import React from 'react';
import { SafeAreaView, FlatList, Text, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {

    const [projects, setProject] = useState([]);

    useEffect(() => {
        api.get('/projects').then( response => {
            console.log(response.data);
            setProject(response.data);
        });
    }, []);

    async function handleAddProject() {

        const reponse = await api.post( '/projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Diego Fernandes'
        });

        const project = response.data;
        setProject( [ ...projects, project ]);

    }

    return (
        <>
            <StatusBar basStyle="light-content" backgroundColor="#7159c1"/>
            <SafeAreaView style={styles.container}>
                <FlatList 
                    
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) = (
                        <Text style={styles.project} key={project.id} style={styles.title}>{project.title}</Text>
                    )}
                />
            </SafeAreaView>

            <TouchableOpacity 
                activeOpacity={0.6} 
                style={styles.button} 
                onPress={handleAddProject}
            >
                <Text style={styles.buttonText}></Text>
            </TouchableOpacity>

            {/*<View style={styles.container}>
                { projects.map ( project => 
                        <Text style={style.project} key={project.id} style={styles.title}>{project.title}</Text>
                    )
                }
            </View>*/}
        </>
    );
}

const styles = StylesSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        //justifyContent: 'center',
        //alignItems: 'center'
    },

    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold'
    },

    project: {
        color: '#fff',
        fontSize: 40
    },

    button: {
        backgroundColor: 'FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    }
})