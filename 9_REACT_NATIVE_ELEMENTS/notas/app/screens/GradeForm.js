import {View, Text, StyleSheet} from 'react-native'
import {Input,Button} from '@rneui/base'
import {useState} from 'react'
import {saveGrade,getGrades,updateGrade} from '../services/GradeServices'
export const GradeForm=({navigation,route})=>{
    
    let isNew = true;
    let subjectR;
    let gradeR;

    if (route.params?.notita != null) {
    isNew = false;

    }

    if (!isNew) {
    subjectR = route.params.notita.subject;
    //gradeR = route.params.notita.grade;
     gradeR = route.params.notita.grade !== undefined 
        ? route.params.notita.grade.toString() 
        : ''; 
    }

    const [subject,setSubject]=useState(subjectR);
    const [grade,setGrade]=useState(gradeR);
    const [errorSubject, setErrorSubject]=useState();
    const [errorGrade, setErrorGrade]=useState();
    const [hasErrors, setHasErrors]=useState();

    
    //const hasErrors=false;
   // console.log("notita:" , route.params.notita);
    
    const save=()=>{
        setErrorGrade(null);
        setErrorSubject(null);
       // setHasErrors(false);
       
        validate();
        if(hasErrors==false){
            if(isNew){
        //console.log("guarda!!");
        saveGrade({subject:subject, grade: parseFloat(grade)});
        //navigation.goBack();
       /* navigation.goBack({ 
        refresh: true,
        data: 'información actualizada'
});*/

        }else{
            updateGrade({subject:subject, grade: parseFloat(grade)});
        }
            navigation.navigate('ListGradesNav');
        }
    }

    const validate=()=>{

        if(subject==null || subject==""){setErrorSubject("Debe ingresar una materia");
            setHasErrors(true);
        } else { setErrorSubject("");
            setHasErrors(false);
        };
        let gradeFloat=parseFloat(grade);
        if(gradeFloat==null || isNaN(gradeFloat) || gradeFloat < 0 || gradeFloat > 10 ){setErrorGrade("Debe ingresar una nota entre 0 y 10");
             setHasErrors(true);
        } else {setErrorGrade("");
            setHasErrors(false);
        }
        
    }

    return <View style={styles.container}>
        <Input 
        value={subject}
        onChangeText={setSubject}
        placeholder="Ejemplo: Matematicas"
        label="Materia"
        errorMessage={errorSubject}
        disabled={!isNew}
        />

        <Input 
        value={grade}
        onChangeText={setGrade}
        placeholder="0-10"
        label="Nota"
        errorMessage={errorGrade}
        />
        <Button
        title="Guardar"
        icon= {{
            name:"save",
            type:"entypo",
            color: "white",
        }}
        buttonStyle={styles.buttonStyle}
        onPress={save}

        />
        </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',
    },
    buttonStyle:{
        backgroundColor:'green',
    }
})