function tipoAprendizagem(){

    var ativo = 0;
    var reflexivo = 0;
    var teorico = 0;
    var pragmatico = 0;


    ativo = getQtdPtsAtivo(ativo);
    reflexivo = getQtdPtsReflexivo(reflexivo);
    teorico = getQtdPtsTeorico(teorico);
    pragmatico = getQtdPtsPragmatico(pragmatico);
    
    console.log("Ativos: ", ativo);
    console.log("Reflexivo: ", reflexivo);
    console.log("Teorico: ", teorico);
    console.log("Pragmático: ", pragmatico);

    var MeuTipo =  meuTipoDeAprendizagem(ativo, reflexivo,teorico, pragmatico);

    console.log("Seu tipo de Aprendizagem é : ", MeuTipo);
    alert("Seu tipo de Aprendizagem é : " + MeuTipo);



}


function getQtdPtsAtivo(ativo){

    if(document.querySelector('input[name = Q3]:checked')){
        ativo++;
    };

    if(document.querySelector('input[name = Q5]:checked')){
        ativo++;
    }
    if(document.querySelector('input[name = Q7]:checked')){
        ativo++;
    }
    if(document.querySelector('input[name = Q9]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q13]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q20]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q26]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q27]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q35]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q37]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q41]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q43]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q46]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q48]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q51]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q61]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q67]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q74]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q75]:checked')){
        ativo++;
    }

    if(document.querySelector('input[name = Q77]:checked')){
        ativo++;
    }

    return ativo;

}

function getQtdPtsReflexivo(reflexivo){
    //Reflexivo
    if(document.querySelector('input[name = Q10]:checked')){
        reflexivo++;
    };

    if(document.querySelector('input[name = Q16]:checked')){
        reflexivo++;
    }
    if(document.querySelector('input[name = Q18]:checked')){
        reflexivo++;
    }
    if(document.querySelector('input[name = Q19]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q28]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q31]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q32]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q34]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q36]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q39]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q42]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q44]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q49]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q55]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q58]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q63]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q65]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q69]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q70]:checked')){
        reflexivo++;
    }

    if(document.querySelector('input[name = Q79]:checked')){
        reflexivo++;
    }

    return reflexivo;
}

function getQtdPtsTeorico(teorico){
    //Teorico
    if(document.querySelector('input[name = Q2]:checked')){
        teorico++;
    };

    if(document.querySelector('input[name = Q4]:checked')){
        teorico++;
    }
    if(document.querySelector('input[name = Q6]:checked')){
        teorico++;
    }
    if(document.querySelector('input[name = Q11]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q15]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q17]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q21]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q23]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q25]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q29]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q33]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q45]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q50]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q54]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q60]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q64]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q66]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q71]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q78]:checked')){
        teorico++;
    }

    if(document.querySelector('input[name = Q80]:checked')){
        teorico++;
    }

    return teorico;
}

function getQtdPtsPragmatico(pragmatico){
    //Pragmático
    if(document.querySelector('input[name = Q1]:checked')){
        pragmatico++;
    };

    if(document.querySelector('input[name = Q8]:checked')){
        pragmatico++;
    }
    if(document.querySelector('input[name = Q12]:checked')){
        pragmatico++;
    }
    if(document.querySelector('input[name = Q14]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q22]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q24]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q30]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q38]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q40]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q47]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q52]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q53]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q56]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q57]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q59]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q62]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q68]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q72]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q73]:checked')){
        pragmatico++;
    }

    if(document.querySelector('input[name = Q76]:checked')){
        pragmatico++;
    }

    return pragmatico;
}

function meuTipoDeAprendizagem(ativo,reflexivo,teorico,pragmatico){

    if(ativo === reflexivo && ativo === teorico && ativo ===pragmatico){
        return "Ativo, Reflexivo, Teórico e Pragmático";
    }

    //Validar se tem algo ativo

    if(ativo >= reflexivo && ativo >= teorico && ativo >= pragmatico){
        if (ativo === reflexivo && ativo === pragmatico){
            return "Ativo, Reflexivo e Pragmático"
        }
        
        else if (ativo === teorico && ativo === pragmatico){
            return "Ativo, Teórico e Pragmático"
        }
        
        else if (ativo ===reflexivo && ativo === teorico ){
            return "Ativo, Reflexivo e Teórico";
        }
        
        else if (ativo === teorico){
            return "Ativo e Teórico";
        }
        
        else if (ativo === pragmatico){
            return "Ativo e Pragmático";
        }
        
        else if(ativo === reflexivo){
            return "Ativo e Reflexivo";
        }  
        
        else{
            return "Ativo";
        }
    }
    
    //Validar se é reflexivo 

    else if (reflexivo >= ativo && reflexivo >= teorico && reflexivo >= pragmatico){
        if (reflexivo === pragmatico === teorico){
            return "Reflexivo, Teórico e Pragmático"
        }
         
        else if (reflexivo === pragmatico){
            return "Reflexivo e Pragmático"
        }
        
        else if(reflexivo=== teorico){
            return "Reflexivo e Teórico"
        }
        
        else {
            return "Reflexivo";
        }

    }

    //Validar se é Teórico
    else if (teorico >= ativo && teorico >= reflexivo && teorico >= pragmatico){
        if(teorico === pragmatico){
            return "Teórico e Pragmático";
        } else{
            return "Teorico";
        }

    }

    //Validar se é Pragmático
    else if (pragmatico >= ativo && pragmatico >= reflexivo && pragmatico >= ativo){
        return "Pragmatico"
    }
}

